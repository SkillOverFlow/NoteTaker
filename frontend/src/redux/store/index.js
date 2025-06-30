import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import noteReducer from "../reducers/noteReducer";
import uiReducer from "../reducers/uiReducer";

export const store = configureStore({
  reducer: { auth: authReducer, notes: noteReducer, ui: uiReducer },
  devTools: true,
});
