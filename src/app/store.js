import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import counterReducer from "../features/components/counter/counterSlice";
import productSlice from "../features/products/reducer/productSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productSlice
  }
});
