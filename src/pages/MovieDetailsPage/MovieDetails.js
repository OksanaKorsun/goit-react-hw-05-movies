import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import { fetchMoviesDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { LinkStyled, List, Wraper,  BackWraper, MovieInfo, MovieWraper, GenresList} from './MovieDetails.styled';
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
  const BASE_URL = 'https://image.tmdb.org/t/p/w300';
  const getVoteAverage = () => {
    return Math.ceil(movie.vote_average * 10);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <LinkStyled to={backLinkRef.current.state?.from ?? '/'}>
        < BackWraper>
          <LiaLongArrowAltLeftSolid />
          <p>Go back</p>
        </ BackWraper>
      </LinkStyled>
      {movie && (
        <div>
          <MovieWraper>
            <img
              src={BASE_URL + movie.poster_path}
              alt={movie.original_title}
            ></img>
            <MovieInfo>
              <h2>{movie.original_title}</h2>
              <p>User Score: {getVoteAverage()}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <GenresList>
                {movie.genres.map(({id, name}) => <li key={id}>{ name}</li>)}
              </GenresList>
            </MovieInfo>
          </MovieWraper>

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
