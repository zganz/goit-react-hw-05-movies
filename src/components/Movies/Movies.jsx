import { fetchData } from '../../service/api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from '../MoviesList/MoviesList';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchData('search', '', '', `${query}`).then(data => {
      const result = data.results.map(el => ({ id: el.id, title: el.title }));
      setSearchMovie(result);
    });
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.search.value });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movie" name="search" />
        <button type="submit">Search</button>
      </form>

      <MoviesList movies={searchMovie} />
    </>
  );
};
