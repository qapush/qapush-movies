import Header from "../Header/Header";
import Filters from '../Filters/Filters';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesLoading, fetchMovies } from "../../features/movies/moviesSlice";
import styles from './App.module.css';
import MoviesList from '../MoviesList/MoviesList';
import { filtersPageData } from "../../features/filters/filtersSlice";
import Lottie from "lottie-react";
import loadingAnimation from "../../lotties/loading.json";

function App() {
  const areMoviesLoading = useSelector(moviesLoading);
  const filtersPage = useSelector(filtersPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  const loadingStyle = {
    width: '100%',
    maxWidth: '200px',
    margin: 'auto'
  }

  return (
    <div className={styles.app}>
      <Header />
      { filtersPage ? <Filters/> : null}
      { areMoviesLoading ? <Lottie animationData={loadingAnimation} style={loadingStyle} /> : <MoviesList/>}
      
    </div>
  );
}

export default App;
