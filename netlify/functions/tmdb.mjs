// eslint-disable-next-line
export default async (req, context) => {
  const reqURL = new URL(req.url);
  const title = reqURL.searchParams.get('title');
  const year = reqURL.searchParams.get('year');
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_KEY}`,
    },
  };

  try {
    const movieData = fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1&year=${year}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => response.results[0]);

    const configData = fetch('https://api.themoviedb.org/3/configuration', options)
      .then((response) => response.json())
      .then((response) => response);

    return Promise.all([movieData, configData]).then((data) => {
      return new Response(
        JSON.stringify({
          data: {
            ...data[0],
            ...data[1],
          },
        }),
        { status: 200 },
      );
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ error: 'Failed to fetch movie data from TMDB' }), {
      status: 500,
    });
  }
};

export const config = {
  path: '/api/tmdb',
};
