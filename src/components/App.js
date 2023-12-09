import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from "react";
// import { Cast } from './Cast/Cast';
// import { GlobalStyle } from './GlobalStyle';
import { Home } from 'pages/HomePage/Home';
// import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { NotFound } from 'pages/NotFoundPage/NotFound';

export const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          
         </Route>
      </Routes>
    
  );
};
