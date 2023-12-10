import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
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
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <div>
            <img src={movie.poster_path} alt={movie.original_title}></img>
            <div>
              <h2>{movie.original_title}</h2>
              <p>User score</p>
              <p>
                Overview <span>{movie.overview}</span>
              </p>
              <p>Genres</p>
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
