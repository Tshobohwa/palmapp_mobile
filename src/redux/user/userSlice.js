import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/api";
import users from "../../data/users";

export const logIn = createAsyncThunk("user/logIng", async (credentials) => {
  try {
    const response = await axios.get(`${BASE_URL}sign_in`, credentials);
    if (!response.ok) throw new Error("User not founded");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  isLoading: false,
  authenticated: true,
  user: users[2],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      return { ...state, user: payload, isLoading: false, authenticated: true };
    });
    builder.addCase(logIn.rejected, (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    });
  },
});

export default userSlice.reducer;
