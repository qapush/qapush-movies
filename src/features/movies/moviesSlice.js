import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../utils/movies';

const loadMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
      const movies = await getMovies();
      return movies
  }
)

const initialState = []
  
  export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase(loadMovies.fulfilled, (state, action) => {
        state.push(...action.payload)
      })
      builder.addCase(loadMovies.rejected, (state, action) => {
        console.error(action.error.message);
      })
    },
  })
  
  
  export default moviesSlice.reducer;
  export {loadMovies};