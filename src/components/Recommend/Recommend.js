import React, {useState} from "react";
import styles from "./Recommend.module.css";

export default function Recommend() {

  const initialForm = {
    type: '',
    title: '',
    year: ''
  }

  const [formData, setFormData] = useState({...initialForm})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    fetch('/api/recommend', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    setFormData({...initialForm})
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }
  

  return (
    <div className={styles.recommend}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" required value={formData.title} onChange={handleChange}/>

        <label htmlFor="year">Year</label>
        <input id="year" type="number" value={formData.year} onChange={handleChange}/>

        <label htmlFor="type">Type</label>
        <select id="type" value={formData.type} onChange={handleChange} required>
          <option value=''></option>
          <option value="Serial">Serial</option>
          <option value="Movie">Movie</option>
        </select>

        <button className='btn' type="submit">Recommend</button>
      </form>
    </div>
  );
}
