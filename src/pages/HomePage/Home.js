import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { LinkStyled, List } from './Home.styled';
export default function Home() {
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
        {movies.map(({ original_title, id}) => {
          // const BASE_URL = 'https://image.tmdb.org/t/p/w200';
          // const photo = poster_path ? BASE_URL + poster_path : null;
          return (
            
              <li key={id}>
                <LinkStyled  to={`/movie/${id}`}>
                {/* <img src={photo} alt={original_title} /> */}
                <h3>{original_title}</h3>
              </LinkStyled>
              </li>
           
          );
        })}
      </List>
    </>
  );
}
