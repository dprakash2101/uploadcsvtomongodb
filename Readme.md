# Upload CSV Data to MongoDB
## This repository contains a Node.js script to upload CSV data into MongoDB using Mongoose.

### Getting Started
1. Clone the Repository:
```bash
git clone https://github.com/dprakash2101/uploadcsvtomongodb.git
```
2. Install Dependencies:
Navigate to the project directory and install the required dependencies using npm:
```bash
cd uploadcsvtomongodb
npm install
```
3. Set up MongoDB:
Ensure you have MongoDB installed and running on your local machine. Modify the MongoDB connection string in app.js.js if necessary.

4. CSV File:
Place your CSV file containing the movie data in the root directory of the project.

### Usage
To import the movie data from the CSV file into MongoDB, run the following command:
```bash
npm run upload
```
## Data Schema

The movie data is imported into MongoDB using the following schema:

- `title`: Title of the movie (String)
- `releaseYear`: Year of release (Number)
- `releaseDate`: Release date (Date)
- `genre`: Array of genres (Array of Strings)
- `writers`: Array of writers (Array of Strings)
- `actors`: Array of actors (Array of Strings)
- `directors`: Array of directors (Array of Strings)
- `sequel`: Sequel number (Number)
- `rating`: Rating of the movie (Number)

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

[Devi Prakash Kandikonda](https://github.com/dprakash2101)

