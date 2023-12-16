import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import { fetchMoviesDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { LinkStyled, List, Wraper, BackWraper } from './MovieDetails.styled';
import { MovieList } from 'components/MoviesList/MoviesList';
export default function MovieDetails() {
  const location = useLocation();
  const backLinkRef = useRef(location);
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);

        const details = await fetchMoviesDetails(params.movieId);
        setMovie(details);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [params.movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <LinkStyled to={backLinkRef.current.state?.from ?? '/'}>
        <BackWraper>
          <LiaLongArrowAltLeftSolid />
          <p>Go back</p>
        </BackWraper>
      </LinkStyled>
      {movie && (
        <div>
          <MovieList movie={movie} />

          <Wraper>
            <p>Additional information</p>
            <List>
              <li>
                <LinkStyled to="credits">Cast</LinkStyled>
              </li>
              <li>
                <LinkStyled to="reviews">Reviews</LinkStyled>
              </li>
            </List>
          </Wraper>
          <Outlet />
        </div>
      )}
    </div>
  );
}
