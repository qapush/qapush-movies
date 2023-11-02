import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  selected: []
}
  
  export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
  })
  
  
  export default filtersSlice.reducer