import React from 'react'
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {

    const { genres, poster, title, year } = movie;
    return (
        <div className={styles.movieCard}>
            <img src={poster} alt={title} />
            <h2>{title}</h2>
            <hr />
            <span>{year}</span>
            <div className={styles.genres}>
                {generateGenres(genres)}
            </div>
        </div>
    )
}

const generateGenres = arr => {
    return arr.map(i => {
        return <span className={styles.genre} key={i.id}>{ i.name }</span>
    } )
}