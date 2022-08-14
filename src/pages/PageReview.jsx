import { useParams } from 'react-router-dom';
import { Review } from '../components/Review/Review';

const PageReview = () => {
  const { movieId } = useParams();

  return <Review movieId={movieId} />;
};

export default PageReview;
