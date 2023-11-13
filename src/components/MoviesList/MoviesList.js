import React from 'react'
import { useSelector } from 'react-redux';
import { moviesData } from '../../features/movies/moviesSlice';
import { selectedFiltersData, filtersData } from '../../features/filters/filtersSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';
import { filteredMovies } from '../../utils/filters';

export default function MoviesList() {

  const movies = useSelector(moviesData);
  const selectedFilters = useSelector(selectedFiltersData);
  const moviesFilters = useSelector(filtersData);
  
  const moviesCards = selectedFilters.length > 0 ?
    filteredMovies(movies, moviesFilters, selectedFilters).map( movieId => <MovieCard key={movieId} movie={movies[movieId]} />)
    :
    Object.keys(movies).map(key => <MovieCard key={key} movie={movies[key]} />); 

  return (
    <div className={styles.moviesList}>
        {moviesCards}
    </div>
  )
}
