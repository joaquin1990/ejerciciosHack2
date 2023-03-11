import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const listsSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList: (state, action) => {
      const date = format(new Date(), "yyy-MM-dd");
      const { id, title, items = [], createdAt = date } = action.payload;
      state.push({ id, title, items, createdAt });
    },
    addItem: (state, action) => {
      const { itemTitle, listId, itemId, checked = false } = action.payload;
      const actualList = state.find((list) => list.id === listId);
      if (actualList) {
        actualList.items.push({ itemTitle, itemId, checked });
      }
    },
    removeItem: (state, action) => {
      const { listId, itemId } = action.payload;
      const actualList = state.find((list) => list.id === listId);
      if (actualList) {
        actualList.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const { addList, addItem } = listsSlice.actions;

export default listsSlice.reducer;
