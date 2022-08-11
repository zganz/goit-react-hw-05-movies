import { fetchData } from '../../service/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  fetchData('details', movieId, '/reviews').then(data => {
    const result = data.results.map(el => ({
      author: el.author,
      content: el.content,
      id: el.id,
    }));
    setReview(result);
  });

  return (
    <ul>
      {review.map(el => (
        <li key={el.id}>
          <h3>Author: {`${el.author}`}</h3>
          <p>{`${el.content}`}</p>
        </li>
      ))}
    </ul>
  );
};
