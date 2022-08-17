import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(trend => (
        <li key={trend.id}>
          <Link to={`/movies/${trend.id}`} state={{ from: location }}>
            {trend.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
