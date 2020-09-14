const BASE_URL = "https://api.themoviedb.org/3/";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w200";
const API_KEY = "47c5e2821f3a4c28ab9cc01b4b88ce6d";

const fetchTrend = () => {
  return fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  ).then((resp) => resp.json().then((data) => data.results));
};

const fetchSearch = (query) => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  ).then((resp) => resp.json().then((data) => data.results));
};

const fetchDetails = (movieId) => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then((resp) =>
    resp.json()
  );
};

const fetchActors = (movieId) => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  ).then((resp) => resp.json());
};

const fetchReviews = (movieId) => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  ).then((resp) => resp.json());
};

export default {
  BASE_IMG_URL,
  fetchSearch,
  fetchTrend,
  fetchDetails,
  fetchActors,
  fetchReviews,
};
