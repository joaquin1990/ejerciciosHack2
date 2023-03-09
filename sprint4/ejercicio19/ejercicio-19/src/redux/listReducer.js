import { createSlice } from "@reduxjs/toolkit";

const listReducer = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addList } = listReducer.actions;

export default listReducer.reducer;
