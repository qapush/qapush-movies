import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'


export default function MovieCard({ movie }) {
  const { genres, poster, title, year, id } = movie;
  return (
    <Link to={`movie/${id}`} className={styles.movieCard}>
      <div>
        <img src={poster} alt={title} />
        <div className={styles.description}>
          <h2>{title}</h2>
          <span className={styles.year}>{year}</span>
          <div className={styles.genres}>{generateGenres(genres)}</div>
        </div>
      </div>
    </Link>
  );
}

const generateGenres = (arr) => {
  return arr.map((i) => {
    return (
      <span className={styles.genre} key={i.id}>
        {i.name}
      </span>
    );
  });
};
