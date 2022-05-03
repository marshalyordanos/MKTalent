import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    posts: [],
    error: null,
  },
  reducers: {
    getAllPost: (state, action) => {
      state.loading = action.payload.loading;
      state.posts = action.payload.posts;
      state.error = action.payload.error;
    },
    register: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.loading = "";
      state.data = "";
      state.error = "";
    },
  },
});

export const { getAllPost } = postSlice.actions;
export default postSlice.reducer;
