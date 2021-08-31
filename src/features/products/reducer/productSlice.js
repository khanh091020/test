import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../../api/productApi";

export const getProduct = createAsyncThunk(async (params) => {
  const data = await productApi.getAll(params);
  console.log(data);
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getProduct.fulfilled]: (state, actions) => actions.payload.data
  }
});

const { actions, reducer } = productSlice;

export default reducer;
