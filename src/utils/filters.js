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
    
    // Get list of all movies for selected filters
    for (const filterId of selectedFilters) {
        const thisFilterMovies = moviesFilters[filterId].movies.filter(movieId => {
            return !moviesIds.includes(movieId)
        });
        moviesIds.push(...thisFilterMovies)
    }

    // Form an array of movies fo selected filters 
    for (const movieId of moviesIds) {
        const movie = {
            ...movies[movieId],
            id: movieId
        };
        result.push(movie);
    }

    return result;
}