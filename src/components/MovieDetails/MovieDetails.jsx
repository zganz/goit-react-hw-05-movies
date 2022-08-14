import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../../service/api';
import { useState } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

  fetchData('details', movieId).then(data => {
    // console.log(data);
    const path = data.poster_path;
    const title = data.title;
    const rating = data.popularity;
    const overview = data.overview;
    const genres = data.genres.map(el => el.name).join(', ');
    // console.log(genres);
    setGenres(genres);
    setOverview(overview);
    setRating(rating);
    setTitle(title);
    setImgUrl(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`);
  });

  return (
    <main>
      <div>
        <p>
          <Link to={'/'}>Go back</Link>
        </p>
        <img src={imgUrl} alt="" width={300} />
        <h2>{title}</h2>
        <b>User Score: {rating}</b>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <hr />
      <h3>Aditional information</h3>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'review'}>Review</Link>
        </li>
      </ul>
      <hr />
    </main>
  );
};
