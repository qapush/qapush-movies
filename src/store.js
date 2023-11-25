import { configureStore } from '@reduxjs/toolkit';
import movies from './features/movies/moviesSlice';
import filters from './features/filters/filtersSlice';
import selectedMovie from './features/selectedMovie/selectedMovieSlice';

export const store = configureStore({
  reducer: {
    movies,
    filters,
    selectedMovie,
  },
});
