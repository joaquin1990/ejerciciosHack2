import { configureStore } from "@reduxjs/toolkit";
import listsSlice from "./listsSlice";

const store = configureStore({
  reducer: {
    lists: listsSlice,
  },
});

export default store;
