import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { LinkStyled, List, Title } from './Home.styled';
import { useLocation } from 'react-router-dom';
export default function Home() {
  const location = useLocation();
  
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // const abortController = new AbortController();
    async function getTrendingFilms() {
      try {
        setIsLoading(true);
        setError(false);
        const trengingFilms = await fetchTrendingMovies();
        setMovies(prevMovies => [...prevMovies, ...trengingFilms.results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingFilms();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <List>
        {movies.map(({ original_title, id }) => {
          // const BASE_URL = 'https://image.tmdb.org/t/p/w200';
          // const photo = poster_path ? BASE_URL + poster_path : null;
          return (
            <li key={id}>
              <LinkStyled to={`/movie/${id}`} state={{from: location}}>
                <Title>{original_title}</Title>
              </LinkStyled>
            </li>
          );
        })}
      </List>
    </>
  );
}
