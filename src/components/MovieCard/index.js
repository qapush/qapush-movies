import styles from './MovieCard.module.css';
import noImage from './no-image.jpg';
import heart from './heart-in-circle.svg'

export default function MovieCard({ movie }) {

  const tags = movie.properties.Tags.multi_select.map((tag) => {
    return tag.name !== 'FAV' ? <li key={tag.id}>{tag.name}</li> : null;
  });

  const poster = movie.properties.Poster.files[0] ? movie.properties.Poster.files[0].file.url : noImage;

  const fav = (
      <div className={styles.fav}>
        <img src={heart} alt="favourite-movie" />
      </div>
  )

  const isFav = movie.properties.Tags.multi_select.some(tag => tag.name === 'FAV');

  return (
    <li className={styles.MovieCard}>
      <div className={styles.content}>
        {isFav ? fav : null}
        <img src={ poster } alt="" />
        <h2>{movie.properties.Title.title[0].plain_text}</h2>
        <h3>Year: {movie.properties.Year.number}</h3>
        <div className="tags">
          <h4>Tags:</h4>
          <ul>{tags}</ul>
        </div>
      </div>
    </li>
  );
}
