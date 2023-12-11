import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/api';
export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchChange = (evt) => setSearchParams({query: evt.target.value})

  const handleSubmit = e => {
    e.preventDefalt();
    // if (searchMovie.trim() === '') {
    //   toast.error('Please enter a query in the search field.');
    //   return;
    // }
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.name.value });
    form.reset();

  };
  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const findedMovie = await fetchMovies(query);
        setMovie(findedMovie);
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
        <input
          type="text"
          // autoComplete="off"
          autoFocus
          onChange={searchChange}
          name="name"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movie.length > 0 && (<div></div>)}
    </>
  );
}
