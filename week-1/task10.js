const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. map() to return: "Inception (8.8)"
const movieTitlesWithRatings = movies.map(
  m => `${m.title} (${m.rating})`
);
console.log("Movies with Ratings:", movieTitlesWithRatings);

// 3. reduce() to find average movie rating
const averageRating =
  movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log("Average Movie Rating:", averageRating);

// 4. find() movie "Joker"
const jokerMovie = movies.find(m => m.title === "Joker");
console.log("Joker Movie:", jokerMovie);

// 5. findIndex() of "Avengers"
const avengersIndex = movies.findIndex(m => m.title === "Avengers");
console.log("Index of Avengers:", avengersIndex);
