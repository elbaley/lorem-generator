import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/text/textSlice";
export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
