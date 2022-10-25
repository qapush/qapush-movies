import { useEffect, useState } from 'react';
import { notion } from '../../api/api';
import CardWrapper from '../CardsWrapper';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    notion()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Movie database:</h1>
      <div>{loading ? 'loading' : null}</div>
      {!movies ? null : <CardWrapper movies={movies} />}
    </div>
  );
}

export default App;
