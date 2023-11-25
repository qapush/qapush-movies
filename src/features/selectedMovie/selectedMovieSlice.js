import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetails } from '../../utils/movies';

export const getMovieDetailsData = createAsyncThunk(
  'selectedMovie/getDetails',
  async ({ title, year }) => {
    const data = await getMovieDetails(title, year);
    return data;
  },
);

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: { loading: true, data: {} },
  extraReducers: {
    [getMovieDetailsData.fulfilled]: (state, { payload }) => {
      return { loading: false, data: payload.data };
    },
    [getMovieDetailsData.pending]: (state) => {
      return { loading: true, data: {} };
    },
    [getMovieDetailsData.rejected]: (state) => {
      return { loading: false, data: {} };
    },
  },
});

export default selectedMovieSlice.reducer;
export const selectedMovieData = (state) => state.selectedMovie;
export const selectedMovieLoadnigData = (state) => state.selectedMovie.loading;
