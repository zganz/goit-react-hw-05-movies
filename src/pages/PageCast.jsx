import { useParams } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';

export const PageCast = () => {
  const { movieId } = useParams();

  return <Cast movieId={movieId} />;
};
