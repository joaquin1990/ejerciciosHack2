import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listReducer";

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
