const  getMovies = async () => {
    const response = await fetch('/api/notion');
    const data = await response.json();
    const movies = formMoviesData(data.data);
    return movies;
}

const formMoviesData = (data) => {
    const result = data.map( ({properties: {Genre, Poster, Title, Tags, Year}}) => ({
        title: Title.title[0].plain_text,
        year: Year.number,
        genres: Genre.multi_select.map( ({name, color}) => ({name, color})),
        tags: Tags.multi_select.map( ({name, color}) => ({name, color})),
        poster: Poster.files[0]?.file.url || null
    }))

    return result;
}

export {getMovies};