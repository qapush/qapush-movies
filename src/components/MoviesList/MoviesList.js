import React from 'react'
import { useSelector } from 'react-redux';
import { moviesData } from '../../features/movies/moviesSlice'
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';

export default function MoviesList() {

    const movies = useSelector(moviesData);

    const moviesCards = Object.keys(movies).map(key => <MovieCard key={key} movie={ movies[key]} />)

  return (
    <div className={styles.moviesList}>
        {moviesCards}
    </div>
  )
}
