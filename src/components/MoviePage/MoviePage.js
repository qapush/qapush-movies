import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../../features/movies/moviesSlice';
import { fetchMovies } from '../../features/movies/moviesSlice';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../NotFound/NotFound';
import { useMatches } from 'react-router-dom';
import {
  selectedMovieData,
  getMovieDetailsData,
  selectedMovieLoadnigData,
} from '../../features/selectedMovie/selectedMovieSlice';
import styles from './MoviePage.module.css';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function MoviePage() {

  const { movieId } = useParams();
  const movies = useSelector(moviesData);
  const selectedMovie = useSelector(selectedMovieData);
  const selectedMovieLoadning = useSelector(selectedMovieLoadnigData);
  const dispatch = useDispatch();

  const matches = useMatches();
  const button = matches.filter( (match) => Boolean(match.handle?.button) )[0]?.handle.button() || null;

  useEffect(() => {
    if (!Object.keys(movies).length) {
      dispatch(fetchMovies());
    } else if (movies[movieId]?.title !== selectedMovie.data.title) {
      dispatch(
        getMovieDetailsData({
          title: movies[movieId].title,
          year: movies[movieId].year,
          serial: movies[movieId].serial,
        }),
      );
    }
  }, [movies]);

  if (Object.keys(movies).length && !movies[movieId]) {
    return (
      <div style={{ height: '100dvh', display: 'flex', justifyContent: 'center' }}>
        <NotFound />
      </div>
    );
  } 

  const loading = !Object.keys(movies).length || selectedMovieLoadning || !selectedMovie.data.backdrop_path;

  

  return (
    <div className={styles.movie_page}>
      { loading ? <Skeleton className={styles.imageSkeleton} /> : <img
        className={styles.backdrop}
        src={`${selectedMovie.data.images.secure_base_url}/w1280/${selectedMovie.data.backdrop_path}`}
        alt=""
      />}
      <h1>{ loading ? <Skeleton count={3} height={30} /> : selectedMovie.data.title}</h1>
      <p>{selectedMovie.data.overview}</p>
    </div>
  );
}
