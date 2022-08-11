const API_KEY = 'de45d36e881aeb0e75823e553c4d37c7';
const BASE_URL = 'https://api.themoviedb.org/3/';

const TYPES = {
  trends: 'trending/movie/day',
  details: 'movie/',
};

export const fetchData = (type, id = '', param = '') => {
  return fetch(`${BASE_URL}${TYPES[type]}${id}${param}?api_key=${API_KEY}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
