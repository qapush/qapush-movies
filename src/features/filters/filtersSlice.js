import { createSlice } from '@reduxjs/toolkit';
import { getFilters } from '../../utils/filters';

const initialState = {
  filters: {},
  selected: [],
  filtersPage: false
}
  
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    showFiltersPage(state) {
      state.filtersPage = true;
    },
    hideFiltersPage(state) {
      state.filtersPage = false;
    },
    toggleFilter(state, { payload }) {

      if (state.selected.includes(payload)) {
        const newSelected = state.selected.filter(cur => cur !== payload)
        state.selected = newSelected;
      } else {
        state.selected.push(payload);
      }
    },
    clearFilters(state) {

      state.selected = [];
    },
  },
  extraReducers: (builder) => {

    builder.addCase('movies/fetchMovies/fulfilled', (state, action) => {
      state.filters = {...getFilters(action.payload)};
    })

  },
})
  
  
export default filtersSlice.reducer;
export const { showFiltersPage, hideFiltersPage, toggleFilter, clearFilters } = filtersSlice.actions;
export const selectedFiltersData = state => state.filters.selected;
export const filtersData = state => state.filters.filters;
export const filtersPageData = state => state.filters.filtersPage;
  