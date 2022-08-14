import { useParams, Outlet } from 'react-router-dom';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const Movie = () => {
  const { movieId } = useParams();

  return (
    <>
      <MovieDetails movieId={movieId} />
      <Outlet />
    </>
  );
};

export default Movie;
