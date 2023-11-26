// Generate all filters object based on movies data retrieved from server
export const getFilters = (moviesData) => {
  const result = {};

  for (const movie in moviesData) {
    const genresAndTags = [...moviesData[movie].genres, ...moviesData[movie].tags];
    genresAndTags.forEach(({ name, id, color }) => {
      if (name !== 'FAV') {
        if (!result[id]) result[id] = { name, color, movies: [] };
        if (!result[id].movies.includes(movie)) result[id].movies.push(movie);
      }
    });
  }

  return result;
};

// Get selected filters movies object
export const filteredMovies = (moviesFilters, selectedFilters) => {
  const moviesIds = [];
  const result = [];

  // Get unique ids of movies with these tags
  for (const filterId of selectedFilters) {
    for (const movieId of moviesFilters[filterId].movies) {
      if (!moviesIds.includes(movieId)) moviesIds.push(movieId);
    }
  }

  // Check if every selected filter has every movie
  for (const movieId of moviesIds) {
    if (
      selectedFilters.every((filterId) => {
        return moviesFilters[filterId].movies.includes(movieId);
      })
    ) {
      result.push(movieId);
    }
  }

  return result;
};
