import React from 'react'
import { useSelector } from 'react-redux';
import { moviesData } from '../../features/movies/moviesSlice';
import { selectedFiltersData, filtersData } from '../../features/filters/filtersSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';
import { filteredMovies } from '../../utils/filters';
import Lottie from "lottie-react";
import emptyAnimation from "../../lotties/empty.json";

export default function MoviesList() {

  const movies = useSelector(moviesData);
  const selectedFilters = useSelector(selectedFiltersData);
  const moviesFilters = useSelector(filtersData);
  
  const moviesCards = selectedFilters.length ?
    filteredMovies(movies, moviesFilters, selectedFilters).map( movieId => <MovieCard key={movieId} movie={movies[movieId]} />)
    :
    Object.keys(movies).map(key => <MovieCard key={key} movie={movies[key]} />); 

  const emptyStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-center',
    justifyContent: 'center',
    zIndex: 0
  }

  const emptyLottieStyle = {
    maxWidth: '300px',
    margin: '0 auto'
  }

  if(selectedFilters.length && !moviesCards.length) {
    return <div style={emptyStyle}>
      <Lottie animationData={emptyAnimation} style={emptyLottieStyle}  />
      <p>Too many filters applied</p>
      <p> Try to remove some</p>
    </div>
  }

  return (
    <div className={styles.moviesList}>
        {moviesCards}
    </div>
  )
}
