import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navigation from 'Navigation/Navigation';

const Home = React.lazy(() => import('../pages/Home'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Movie = React.lazy(() => import('../pages/Movie'));
const PageReview = React.lazy(() => import('../pages/PageReview'));
const PageCast = React.lazy(() => import('../pages/PageCast'));
const PageSearchMovie = React.lazy(() => import('../pages/PageSearchMovie'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<PageSearchMovie />} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="review" element={<PageReview />} />
            <Route path="cast" element={<PageCast />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
