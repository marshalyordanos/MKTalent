import { createSlice } from "@reduxjs/toolkit";

export const jobpostSlice = createSlice({
  name: "jobpost",
  initialState: {
    loading: false,
    jobposts: [],
    error: null,
  },
  reducers: {
    getAllJobPost: (state, action) => {
      state.loading = action.payload.loading;
      state.jobposts = action.payload.jobposts;
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

export const { getAllJobPost } = jobpostSlice.actions;
export default jobpostSlice.reducer;
