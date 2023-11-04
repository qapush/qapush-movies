import Header from "../Header/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesLoading, fetchMovies } from "../../features/movies/moviesSlice";
import MoviesList from '../MoviesList/MoviesList';

function App() {
  const areMoviesLoading = useSelector(moviesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      { areMoviesLoading ? 'Loading' : <MoviesList/>}
    </div>
  );
}

export default App;
