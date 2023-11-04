const getFilters = (moviesData) => {
    const result = {};
    for (const movie in moviesData) {
        const { genres, tags } = moviesData[movie];
        
        // Genres filters
        genres.forEach( ({name, id, color}) => {
            if (!result[id]) result[id] = { name, color, movies: [movie] }
            result[id].movies.push(movie);
            
        })

        // Tags filters
        tags.forEach( ({name, id, color}) => {
            if(name !== 'FAV') {
                if (!result[id]) result[id] = { name, color, movies: [movie] }
                result[id].movies.push(movie);
            }
        })
    }

    return result;
}

export {getFilters}