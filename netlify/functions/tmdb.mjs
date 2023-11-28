// eslint-disable-next-line
export default async (req, context) => {
  const reqURL = new URL(req.url);
  const title = reqURL.searchParams.get('title');
  const year = reqURL.searchParams.get('year');
  // !! for converting into boolean
  const serial = reqURL.searchParams.get('serial') === 'true';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_KEY}`,
    },
  };

  const searchUrl = serial
    ? `https://api.themoviedb.org/3/search/tv?query=${title}&include_adult=false&language=en-US&page=1&year=${year}`
    : `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1&year=${year}`;

  const configUrl = 'https://api.themoviedb.org/3/configuration';

  return Promise.all([
    fetch(searchUrl, options).then((data) => data.json()),
    fetch(configUrl, options).then((data) => data.json()),
  ])
    .then((data) => {
      console.log(`Data for the ${serial ? 'serial' : 'movie'} ${title} fetched successfully`);
      return new Response(
        JSON.stringify({
          data: {
            ...data[0].results[0],
            ...data[1],
          },
        }),
        {
          status: 200,
        },
      );
    })
    .catch((e) => {
      console.log();
      return new Response(JSON.stringify({ error: 'Failed to fetch movie data from TMDB' }), {
        status: 500,
      });
    });
};

export const config = {
  path: '/api/tmdb',
};
