import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './MoviesListSkeleton.module.css';

export default function MoviesListSkeleton() {
  return (
    <div className={styles.moviesLoader}>
      {new Array(100).fill(1).map((i, index) => {
        return (
          <div key={index} className={styles.moviesLoaderCard}>
            <Skeleton  className={styles.moviesLoaderCardSkeleton}/>
          </div>
        );
      })}
    </div>
  );
}
