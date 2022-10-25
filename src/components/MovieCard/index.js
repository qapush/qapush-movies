import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  console.log(movie)

  const tags = movie.properties.Tags.multi_select.map((tag) => {
    return <li key={tag.id}>{tag.name}</li>;
  });


  return (
    <li className={styles.MovieCard}>
      <img src={ movie.properties.Poster.files[0]?.file.url} alt="" />
      <h2>{movie.properties.Title.title[0].plain_text}</h2>
      <h3>Year: {movie.properties.Year.number}</h3>
      <div className="tags">
        <h4>Tags:</h4>
        <ul>{tags}</ul>
      </div>
    </li>
  );
}
