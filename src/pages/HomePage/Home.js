import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
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
        console.log(trengingFilms.results);

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
    <main>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <div>
        {movies.map(({ title, id, poster_path }) => (<div key={id}>
          <Link to={`${id}`}>
            <img src={poster_path} alt={title}/>
            <h3>{title}</h3>
          </Link>
        </div>))}
      </div>
    </main>
  );
}