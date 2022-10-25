import React from 'react';
import MovieCard from '../MovieCard';
import styles from './cards-wrapper.module.css';

export default function CardWrapper({ movies }) {
  return (
      <ul className={styles.cardsWrapper}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>

  );
}
