import { useEffect, useState } from 'react';

import axios from 'axios';
// require('dotenv').config();

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  let result = null;

  useEffect(() => {
    axios('/.netlify/functions/notion').then((resp) => {
      setLoading(false);
      setData(resp.data);
    });
  }, []);

  if (data) {
    result = data.results.map((i, index) => {
      // console.log(i.properties.Tags.multi_select);
      const tags = i.properties.Tags.multi_select.map((tag, tagIndex) => {
        return <li kay={tagIndex}>{tag.name}</li>;
      });
      return (
        <li key={index}>
          <h2>{i.properties.Title.title[0].plain_text}</h2>
          <p>Year: {i.properties.Year.number}</p>
          <p>Tags:</p>
          <ul>{tags}</ul>
        </li>
      );
    });
  }

  return (
    <div className="App">
      <h1>Movie database:</h1>
      <div>{loading ? 'loading' : null}</div>
      <ul>{!data ? null : result}</ul>
    </div>
  );
}

export default App;
