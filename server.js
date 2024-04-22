import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express application
const app = express();

// Get API key
const apiKey = process.env.API_TOKEN;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/assets')); // Serve static files from the 'public' directory
app.set('view engine', 'ejs');

async function fetchMultipleUrls(apiKey) {
  const url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=nl-NL&with_genres=28`;
  const url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=nl-NL`;
  const url3 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=nl-NL`;

  // Fetch data from both URLs concurrently
  const [data1, data2, data3] = await Promise.all([
    fetch(url1).then(response => response.json()),
    fetch(url2).then(response => response.json()),
    fetch(url3).then(response => response.json()),
  ]);
  
  const top5movies = data3.results.sort((a, b) => b.vote_count - a.vote_count).slice(0, 5);

  return { discoverMovies: data1.results, topratedMovies: data2.results, trendingMovies: data3.results, top5movies: top5movies};
}

async function fetchMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}&language=nl-NL?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchMovieImages(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchSearchResult(searchTerm) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=nl-NL&page=1&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchMovieReviews(movieId) {
  console.log(movieId);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Routes
app.get("/", async (req, res) => {
  try {
    const { movies, trendingMovies, discoverMovies, top5movies} = await fetchMultipleUrls(process.env.API_TOKEN);
    res.render('pages/index', {movies, trendingMovies, discoverMovies, top5movies});
  } catch (error) {
    console.error('Fetching movies failed:', error);
    res.status(500).send('Failed to fetch movies');
  }
});

// Detailpagina route
app.get("/movie/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movieData = await fetchMovieDetails(movieId);
    const movieImagesData = await fetchMovieImages(movieId);
    const reviewData = await fetchMovieReviews(movieId);

    console.log(reviewData.results.length);

    res.render('pages/movie_detail', { movie: movieData, movieImages: movieImagesData.posters, movieReviews: reviewData.results});
  } catch (error) {
    console.error('Fetching movie details failed:', error);
    res.status(500).send('Failed to fetch movie details');
  }
});

// Search route
app.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const searchData = await fetchSearchResult(searchTerm);

    const searchWithDataImages = searchData.results.filter(movie => movie.poster_path != null);

    res.render('pages/search_results', { title: "Resultaten", searchdataResults: searchWithDataImages, searchTerm});
  } catch (error) {
    console.error('Fetching movie details failed:', error);
    res.status(500).send('Failed to fetch movie details');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});