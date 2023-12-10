import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/api';
import { Loader } from 'components/Loader/Loader';
export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLOading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function getMoviesCredits() {
      try {
        setIsLOading(true);
        setError(false);
        const cast = await fetchMoviesCredits(params.movieId);
        setCredits([...cast]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLOading(false);
      }
    }
    getMoviesCredits();
  }, [params.movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {credits.length > 0 && (
        <ul>
          {credits.map(({ id, name, character, profile_path }) => {
            const BASE_URL = 'https://image.tmdb.org/t/p/w200';
            const photo = BASE_URL + profile_path;
            return (
              <li key={id}>
                <img src={photo} alt={name}></img>
                <p>{name}</p>
                <p>
                  Character: <span>{character}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
