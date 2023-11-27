import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesLoading, fetchMovies } from '../../features/movies/moviesSlice';
import styles from './App.module.css';
import MoviesList from '../MoviesList/MoviesList';
import { filtersPageData } from '../../features/filters/filtersSlice';
import Loader from '../Loader/Loader';

function App() {
  const areMoviesLoading = useSelector(moviesLoading);
  const filtersPage = useSelector(filtersPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    const moviesPromise = dispatch(fetchMovies());

    return () => {
      moviesPromise.abort();
    };

  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      {filtersPage ? <Filters /> : null}
      {areMoviesLoading ? <Loader /> : <MoviesList />}
    </div>
  );
}

export default App;
