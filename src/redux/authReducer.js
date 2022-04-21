import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    login: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, setRole } = userSlice.actions;
export default userSlice.reducer;
