import React from 'react';
import MovieCard from '../MovieCard';
import styles from './cards-wrapper.module.css';

export default function CardWrapper({ movies }) {
  return (
    <div className={styles.cardsWrapper}>
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}
