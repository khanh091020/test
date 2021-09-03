import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../../api/categoriesApi";

export const getAllCategories = createAsyncThunk("categories/getAllCategries", async () => {
  const data = await categoryApi.getAll();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    categories: []
  },
  reducers: {},
  extraReducers: {
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    }
  }
});

const { actions, reducer } = productSlice;

export default reducer;
