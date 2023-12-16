import {
  MovieWraper,
  MovieInfo,
  GenresList,
  FilmStyled,
} from './MoviesList.styled';

export const MovieList = ({ movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300';
  const getVoteAverage = () => {
    return Math.ceil(movie.vote_average * 10);
  };
  return (
    <MovieWraper>
      {movie.poster_path ? (
        <img
          src={BASE_URL + movie.poster_path}
          alt={movie.original_title}
        ></img>
      ) : (
        <FilmStyled size="450px" />
      )}

      <MovieInfo>
        <h2>{movie.original_title}</h2>
        <p>User Score: {getVoteAverage()}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <GenresList>
          {movie.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </GenresList>
      </MovieInfo>
    </MovieWraper>
  );
};
