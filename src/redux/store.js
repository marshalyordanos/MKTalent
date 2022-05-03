import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authReducer";
import postReducer from "./postReducer";

import counterReducer from "./counter/mode";

export default configureStore({
  reducer: {
    mode: counterReducer,
    userAuth: userReducer,
    postData: postReducer,
  },
});
