import React from 'react'
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const { genres, poster, title, year, id } = movie;
    return (
        <Link to={`movie/${id}`} className={styles.movieCard}>
            <div>
                <img src={poster} alt={title} />
                <h2>{title}</h2>
                <hr />
                <span>{year}</span>
                <div className={styles.genres}>
                    {generateGenres(genres)}
                </div>
            </div>
        </Link>
    )
}

const generateGenres = arr => {
    return arr.map(i => {
        return <span className={styles.genre} key={i.id}>{i.name}</span>
    })
}