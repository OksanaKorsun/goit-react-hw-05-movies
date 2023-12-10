import { useState } from 'react';
import toast from 'react-hot-toast';
// import { fetchMovies } from 'services/api';
export default function Movie() {
  const [searchMovie, setSearchMovie] = useState('');
  //   const [error, setError] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  const searchChange = e => setSearchMovie(e.target.value.toLowerCase());
  const handleSubmit = e => {
    e.preventDefalt();
    if (searchMovie.trim() === '') {
      toast.error('Please enter a query in the search field.');
      return;
    }
    setSearchMovie('');
  };
  // useEffect(() => {
  //     async function getMovie() {
  //         try {
  //             setError(false);
  //             setIsLoading(true);
  //             const movie = await fetchMovies(searchMovie);
  //         }
  //         catch (error) {
  //             setError(true);
  //         }
  //         finally {
  //             setIsLoading(false);
  //         }
  //     }
  //     getMovie();
  // }, [searchMovie])
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={searchChange}
          name="searchImage"
          value={searchMovie}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
