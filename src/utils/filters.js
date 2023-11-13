// Generate all filters object based on movies data retrieved from server
export const getFilters = (moviesData) => {
    
    const result = {};

    for (const movie in moviesData) {
        const genresAndTags = [...moviesData[movie].genres, ...moviesData[movie].tags];
        genresAndTags.forEach(({ name, id, color }) => {
            if(name !== 'FAV') {
                if (!result[id]) result[id] = { name, color, movies: [] }
                if(!result[id].movies.includes(movie)) result[id].movies.push(movie);
            }
        })
    }

    return result;
}

// Get selected filters movies object 
export const filteredMovies = (movies, moviesFilters, selectedFilters) => {
    const moviesIds = [];
    const result = [];
    
    // Get movie ids of selected filters
    for (const filterId of selectedFilters) {
        for (const movieId of moviesFilters[filterId].movies) {
            if (!moviesIds.includes(movieId)
                && (movies[movieId].genres.some(genre => genre.id === filterId)
                    || movies[movieId].tags.some(tag => tag.id === filterId))) {
                    moviesIds.push(movieId);
            }
        }
    }

    console.log(moviesIds);
    return result;
}