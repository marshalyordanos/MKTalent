import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authReducer";
import postReducer from "./postReducer";
import blogPostReducer from "./blogpostReducer";
import counterReducer from "./counter/mode";
import user from "./userReducer";

import jobpostReducer from "./jobpostReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    mode: counterReducer,
    userAuth: persistedReducer,
    postData: postReducer,
    blogPostData: blogPostReducer,
    jobPostData: jobpostReducer,
    users: user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
