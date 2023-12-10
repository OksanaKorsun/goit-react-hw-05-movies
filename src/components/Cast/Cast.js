import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MdNoPhotography } from 'react-icons/md';
export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function getMoviesCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const findCredits = await fetchMoviesCredits(params.movieId);
        setCredits([...findCredits.cast]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesCredits();
  }, [params.movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {credits.length > 0 && (
        <div>
          <ul>
            {credits.map(({ id, name, character, profile_path }) => {
              const BASE_URL = 'https://image.tmdb.org/t/p/w200';
              const photo = BASE_URL + profile_path;
              return (
                <li key={id}>
                  {profile_path ? (
                    <img src={photo} alt={name}></img>
                  ) : (
                    <MdNoPhotography size="200" />
                  )}

                  <p>{name}</p>
                  <p>
                    Character: <span>{character}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
