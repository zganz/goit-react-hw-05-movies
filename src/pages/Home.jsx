import { fetchData } from '../service/api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchData('trends').then(data => {
      const result = data.results.map(mov => ({
        id: mov.id,
        title: mov.title,
      }));
      setTrends(result);
    });
  });

  return <MoviesList movies={trends} />;
};

export default Home;
