
import axios from 'axios';
const API_KEY = '60bd723dccc70df79dbe0b26ac5ef295';
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const responce = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return await responce.data;
};
export const fetchMovies = async (query) => {
  const responce = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return await responce.data;
}
export const fetchMoviesDetails = async (movieId) => {
  const responce = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return await responce.data;
}
export const fetchMoviesCredits = async (movieId) => {
  const responce = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return await responce.data;
}
export const fetchReviews = async (movieId) => {
  const responce = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return await responce.data;
}