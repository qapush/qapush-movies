import { createSlice } from '@reduxjs/toolkit';
import { getFilters } from '../../utils/filters';

const initialState = {
  filters: {},
  selected: []
}
  
  export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase('movies/fetchMovies/fulfilled', (state, action) => {
        state.filters = {...getFilters(action.payload)};
      })

    },
  })
  
  
export default filtersSlice.reducer;
export const selected = state => state.filters.selected;
export const filters = state => state.filters.filters;
  