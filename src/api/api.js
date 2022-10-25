import axios from 'axios';
import { useState } from 'react';

// const [movies, setMovies] = useState(null);

const notion = () => {
  return axios('/.netlify/functions/notion').then((resp) => {
    return resp.data.results;
  });
};

export { notion };
