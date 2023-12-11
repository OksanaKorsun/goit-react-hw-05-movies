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
// const NotFound  = lazy(() => import("pages/NotFoundPage/NotFound"));
// const Home = lazy(() => import("pages/HomePage/Home"));
// const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetails"));
// const Movie = lazy(() => import("pages/MoviePage/Movie"));
// const Mission = lazy(() => import("./Mission"));
// const Team = lazy(() => import("./Team"));
// const Reviews = lazy(() => import("./Reviews"));

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
