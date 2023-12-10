import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/HomePage/Home';
import NotFound from 'pages/NotFoundPage/NotFound';
import MovieDetails from 'pages/MovieDetailsPage/MovieDetails';
import Movie from 'pages/MoviePage/Movie';

import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <div>
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
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
