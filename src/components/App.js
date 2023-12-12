import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Loader } from './Loader/Loader';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));
const Home = lazy(() => import('pages/HomePage/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage/MovieDetails'));
const Movie = lazy(() => import('pages/MoviePage/Movie'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
