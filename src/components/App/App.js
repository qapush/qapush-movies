import Header from "../Header/Header";
import Filters from '../Filters/Filters';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesLoading, fetchMovies } from "../../features/movies/moviesSlice";
import MoviesList from '../MoviesList/MoviesList';
import { filtersPageData } from "../../features/filters/filtersSlice";

function App() {
  const areMoviesLoading = useSelector(moviesLoading);
  const filtersPage = useSelector(filtersPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      { filtersPage ? <Filters/> : null}
      { areMoviesLoading ? 'Loading' : <MoviesList/>}
    </div>
  );
}

export default App;
