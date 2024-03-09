const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movies_lobby', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    saveMovies();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the script with error status
  });

async function saveMovies() {
  // Define Schema
  const movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    releaseDate: Date,
    genre: [String],
    writers: [String],
    actors: [String],
    directors: [String],
    sequel: Number,
    rating: Number
  });

  const Movie = mongoose.model('Movie', movieSchema);

  try {
    // Read CSV file and upload data to MongoDB
    const inputStream = fs.createReadStream('movies.csv').pipe(csv());

    for await (const row of inputStream) {
      // Convert row to Movie model instance
      const movie = new Movie({
        title: row.title,
        releaseYear: parseInt(row.releaseYear),
        releaseDate: new Date(row.releaseDate),
        genre: row.genre.split(' | '),
        writers: row.writers.split(' | '),
        actors: row.actors.split(' | '),
        directors: row.directors.split(' | '),
        sequel: parseInt(row.sequel),
        rating: parseInt(row.rating)
      });

      // Save movie to MongoDB
      await movie.save();
      console.log('Movie saved to MongoDB');
    }

    console.log('CSV file successfully processed');
  } catch (err) {
    console.error('Error processing CSV file:', err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}
