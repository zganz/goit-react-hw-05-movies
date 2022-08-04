const API_KEY = 'de45d36e881aeb0e75823e553c4d37c7';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrend = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(
    response => console.log('1')
  );
};
