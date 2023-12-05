import React from "react";
import styles from "./Recommend.module.css";

export default function Recommend() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.recommend}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" required />

        <label htmlFor="year">Year</label>
        <input id="year" type="text" />

        <label htmlFor="type">Type</label>
        <select id="type">
          <option value="Serial">Serial</option>
          <option value="Movie">Movie</option>
        </select>

        <button className='btn' type="submit">Recommend</button>
      </form>
    </div>
  );
}
