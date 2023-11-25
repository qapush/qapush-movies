export const getMovies = async () => {
  const response = await fetch('/api/notion');

  if (!response.ok) {
    const errMsg = await response.json();
    throw new Error(errMsg.error);
  }

  const data = await response.json();
  const movies = formMoviesData(data.data);
  return movies;
};

export const getMovieDetails = async (title, year) => {
  const response = await fetch(`/api/tmdb/?title=${title}&year=${year}`);

  if (!response.ok) {
    const errMsg = await response.json();
    console.log(errMsg);
    throw new Error(errMsg.error);
  }

  const data = await response.json();
  return data;
};

const formMoviesData = (data) => {
  const result = {};

  data.forEach(({ id, properties: { Genre, Poster, Title, Tags, Year } }) => {
    result[id] = {
      title: Title.title[0].plain_text,
      year: Year.number,
      genres: Genre.multi_select.map(({ name, id, color }) => ({ name, id, color })),
      tags: Tags.multi_select.map(({ name, id, color }) => ({ name, id, color })),
      poster: Poster.files[0]?.file.url || process.env.PUBLIC_URL + '/no-poster.svg',
    };
  });
  return result;
};
