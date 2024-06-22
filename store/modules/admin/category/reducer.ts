import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Category from "../../../../dtos/Category";

const categorySlice = createSlice({
  name: "category",
  initialState: {} as Category | null,
  reducers: {
    setCategoryToEdit(state, action: PayloadAction<Category>) {
      return action.payload;
    },
    clearCategoryToEdit(state) {
      return null;
    },
  },
});

export const { setCategoryToEdit, clearCategoryToEdit } = categorySlice.actions;
export default categorySlice.reducer;
