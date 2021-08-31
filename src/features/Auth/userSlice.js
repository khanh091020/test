import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../../api/userApi";

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await userAPI.register(data);
  localStorage.setItem("acess_token", response.jwt);
  localStorage.setItem("user", JSON.stringify(response.user));
  return response.user;
});

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await userAPI.login(data);
  localStorage.setItem("acess_token", response.jwt);
  localStorage.setItem("user", JSON.stringify(response.user));
  return response.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    settings: { name: "khanh" },
    currentUser: JSON.parse(localStorage.getItem("user")) || {}
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      state.currentUser = {};
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
