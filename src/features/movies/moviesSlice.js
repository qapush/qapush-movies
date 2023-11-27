import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../utils/movies';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movies = await getMovies();
  return movies;
});

const initialState = {
  loading: true,
  movies: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = { ...action.payload };
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.error(action.error);
    });
  },
});

export default moviesSlice.reducer;
export { fetchMovies };
export const moviesLoading = (state) => state.movies.loading;
export const moviesData = (state) => state.movies.movies;
