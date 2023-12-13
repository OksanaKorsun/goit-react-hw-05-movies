import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FormStyled, InputStyled, FormButton, LinkStyled, List, Title } from './Movie.styled';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/api';
export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefalt();
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
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled type="text" autoComplete="off" autoFocus name="query" />
        <FormButton type="submit">Search</FormButton>
      </FormStyled>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <List>
          {movies.map(({ original_title, id }) => (
            <li key={id}>
              <LinkStyled  to={`/movie/${id}`} state={{ from: location }}>
                <Title>{original_title}</Title>
              </LinkStyled>
            </li>
          ))}
        </List>
      )}
      {movies.length === 0 && !isLoading && query && (
        <p>Movie "{query}" not found.</p>
      )}
    </>
  );
}
