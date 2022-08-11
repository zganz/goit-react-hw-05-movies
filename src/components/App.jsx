import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navigation from 'Navigation/Navigation';
import { NotFound } from '../pages/NotFound';
import { Movie } from '../pages/Movie';
import { PageReview } from 'pages/PageReview';
import { PageCast } from 'pages/PageCast';

const Home = React.lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
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
