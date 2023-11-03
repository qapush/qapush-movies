import { createSlice } from '@reduxjs/toolkit';
import { getFilters } from '../../utils/filters';

const initialState = {
  filters: [],
  selected: []
}
  
  export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase('movies/fetchMovies/fulfilled', (state, action) => {
        console.log(action.payload);
        state.filters.push(...getFilters(action.payload));
      })

    },
  })
  
  
  export default filtersSlice.reducer