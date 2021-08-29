import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, actions) => {
      return state + 1;
    },
    decrement: (state, actions) => {
      return state - 1;
    },
  },
});
export const selectCounter = (state) => state.counter;
export const { increment, decrement } = slice.actions;
console.log(slice.reducer);
export default slice.reducer;
