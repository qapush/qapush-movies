import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../../features/movies/moviesSlice';
import { fetchMovies } from '../../features/movies/moviesSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import {
  selectedMovieData,
  getMovieDetailsData,
  selectedMovieLoadnigData,
} from '../../features/selectedMovie/selectedMovieSlice';
import styles from './MoviePage.module.css';

export default function MoviePage() {
  const { movieId } = useParams();
  const movies = useSelector(moviesData);
  const selectedMovie = useSelector(selectedMovieData);
  const loading = useSelector(selectedMovieLoadnigData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(movies).length) {
      dispatch(fetchMovies());
    } else if (movies[movieId]?.title !== selectedMovie.title) {
      dispatch(getMovieDetailsData({ title: movies[movieId].title, year: movies[movieId].year }));
    }
  }, [movies]);

  if (!Object.keys(movies).length || loading) {
    return (
      <div style={{ height: '100dvh', display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else if (Object.keys(movies).length && !movies[movieId]) {
    return (
      <div style={{ height: '100dvh', display: 'flex', justifyContent: 'center' }}>
        <NotFound />
      </div>
    );
  }

  return (
    <div className={styles.movie_page}>
      <img
        className={styles.backdrop}
        src={`${selectedMovie.data.images.secure_base_url}/w1280/${selectedMovie.data.backdrop_path}`}
        alt=""
      />
      <h1>{selectedMovie.data.title}</h1>
      <p>{selectedMovie.data.overview}</p>
    </div>
  );
}
