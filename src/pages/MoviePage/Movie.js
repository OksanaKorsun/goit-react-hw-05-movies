import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/api';
export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const searchChange = (evt) => setSearchParams({ query: evt.target.value });

  const handleSubmit = e => {
    e.preventDefalt();
    // const form = e.currentTarget;
    // setSearchParams({ query: e.target.value });
    // form.reset();
    const { value } = e.target.elements.query;
    if (value) {
      setSearchParams({ query: value });
    }
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const findedMovie = await fetchMovies(query);
        setMovies(findedMovie.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [query]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" autoFocus name="name" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && <div>Movies</div>}
    </>
  );
}
