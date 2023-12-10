import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Link } from './MovieDetails.styled';
export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);

        const details = await fetchMoviesDetails(params.movieId);
        setMovie(details);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [params.movieId]);
  const BASE_URL = 'https://image.tmdb.org/t/p/w200';
  const getVoteAverage = () => {
    return Math.ceil(movie.vote_average * 10)
  }

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <div>
            <img
              src={BASE_URL + movie.poster_path}
              alt={movie.original_title}
            ></img>
            <div>
              <h2>{movie.original_title}</h2>
              <p>User Score: {getVoteAverage()}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres.map(({ name, id }) => (
                <ul>
                  <li key={id}>{name}</li>
                </ul>
              ))}
            </div>
          </div>
          <ul>
            <li>
              <Link to="credits">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
