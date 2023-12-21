import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  WraperCast,
  ListCast,
  ItemCast,
  PhotoWraper,
  InfoWraper,
  StyledCharacter,
} from './Cast.styled';
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
        <WraperCast>
          <ListCast>
            {credits.map(({ id, name, character, profile_path }) => {
              const BASE_URL = 'https://image.tmdb.org/t/p/w200';
              const photo = BASE_URL + profile_path;
              return (
                <ItemCast key={id}>
                  {profile_path ? (
                    <img src={photo} alt={name}></img>
                  ) : (
                    <PhotoWraper size="175px"/>
                  )}

                  <InfoWraper>
                    <p>{name}</p>
                    <StyledCharacter>
                      Character: <span>{character}</span>
                    </StyledCharacter>
                  </InfoWraper>
                </ItemCast>
              );
            })}
          </ListCast>
        </WraperCast>
      )}
      {credits.length === 0 && <p>We have no information about the cast of this movie.</p>}
    </div>
  );
};
