import { useEffect, useState } from 'react';
// import { fetchTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
export const Home = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    // const abortController = new AbortController();
    async function getTrendingFilms() {
      try {
        setIsLoading(true);
        setError(false);
        // const trengingFilms = await fetchTrendingMovies();
      
        // setMovies(prevMovies => [...prevMovies, ...trengingFilms])
      } catch (error) {
        setError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    getTrendingFilms();
  });
    return <main>
      <h2>Trending today</h2>
    {isLoading && <Loader />}
    {error && <p>{error}</p>}
  </main>
};
