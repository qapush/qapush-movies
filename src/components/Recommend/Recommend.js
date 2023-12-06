import React, {useState} from "react";
import styles from "./Recommend.module.css";

export default function Recommend() {

  const initialForm = {
    type: '',
    title: '',
    year: ''
  }

  const [formData, setFormData] = useState({...initialForm})
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/recommend', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(res => {
      setFormData({...initialForm})
      setStatus( res.success ? 'success' : 'error')
      setTimeout(() => {
        setStatus( 'idle')
      }, 2000)
    })
    
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const info = status === 'idle' || status === 'sending' ? 
    null : status === 'success' ? 
      'Sent successfully ✔' : 'Failed to send ❌';
  

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

        <button className='btn' type="submit" enabled={ (status === 'idle').toString() }>Recommend</button>
      </form>
      <p className={styles.info}>
        { info }
      </p>
    </div>
  );
}
