import { Link } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(trend => (
        <li key={trend.id}>
          <Link to={`/movies/${trend.id}`}>{trend.title}</Link>
        </li>
      ))}
    </ul>
  );
};
