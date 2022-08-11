import { fetchData } from '../../service/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import css from '../Cast/Style.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  fetchData('details', movieId, '/casts').then(data => {
    // console.log(data);
    const result = data.cast.map(el => ({
      name: el.name,
      character: el.character,
      profile_path: el.profile_path,
      id: el.id,
    }));
    // console.log(result);
    setCast(result);
  });

  return (
    <ul className={css.list}>
      {cast.map(el => (
        <li key={el.id} className={css.item}>
          <h3>{`${el.name}`}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
            alt=""
          />
          <p>{`${el.character}`}</p>
        </li>
      ))}
    </ul>
  );
};
