import { configureStore } from "@reduxjs/toolkit";
import celebritiesReducer from "../features/celebrities/celebritiesSlice";

export const store = configureStore({
  reducer: { celebrities: celebritiesReducer },
});
