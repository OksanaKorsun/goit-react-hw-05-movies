import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));
const Home = lazy(() => import('pages/HomePage/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage/MovieDetails'));
const Movie = lazy(() => import('pages/MoviePage/Movie'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
