import { useParams, Outlet } from 'react-router-dom';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const Movie = () => {
  const { movieId } = useParams();

  return (
    <>
      <MovieDetails movieId={movieId} />
      <Outlet />
    </>
  );
};
