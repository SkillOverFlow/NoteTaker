import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  uid: null,
  email: null,
  photoUrl: null,
  observable: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH_LOGIN: (state) => {
      return {
        ...state,
        name: action.payload.displayName,
        uid: action.payload.uid,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
        observable: false,
      };
    },
    AUTH_LOGOUT: (state) => {
      return {
        ...initialState,
        observable: false,
      };
    },
    OBSERVABLE_NEXT: (state) => {
      return {
        ...state,
        observable: false,
      };
    },
  },
});

export const { AUTH_LOGIN, AUTH_LOGOUT, OBSERVABLE_NEXT } = authSlice.actions;
export default authSlice.reducer;
