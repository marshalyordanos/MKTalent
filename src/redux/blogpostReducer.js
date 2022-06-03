import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const blogpostSlice = createSlice({
  name: "blogpost",
  initialState: {
    loading: false,
    blogposts: [],
    error: null,
  },
  reducers: {
    getAllblogPost: (state, action) => {
      state.loading = action.payload.loading;
      state.blogposts = action.payload.blogposts;
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

export const { getAllblogPost } = blogpostSlice.actions;
export default blogpostSlice.reducer;
