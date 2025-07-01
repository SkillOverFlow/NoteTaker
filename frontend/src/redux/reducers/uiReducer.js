import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    show: false,
    message: "",
    type: null,
    showLoader: false,
  },
  mobile: {
    showFolders: false,
    showNotes: false,
    showNote: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    SHOW_ALERT: (state, action) => {
      return {
        ...state,
        alert: {
          show: true,
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    },
    HIDE_ALERT: (state, action) => {
      return {
        ...state,
        alert: {
          ...state.alert,
          show: false,
        },
      };
    },
    SHOW_LOADER: (state, action) => {
      return {
        ...state,
        showLoader: true,
      };
    },
    HIDE_LOADER: (state, action) => {
      return {
        ...state,
        showLoader: false,
      };
    },
    SHOW_FOLDER_MOBILE: (state, action) => {
      return {
        ...state,
        mobile: {
          showFolders: true,
          showNotes: false,
          showNote: false,
        },
      };
    },
    SHOW_NOTES_MOBILE: (state, action) => {
      return {
        ...state,
        mobile: {
          showFolders: false,
          showNotes: true,
          showNote: false,
        },
      };
    },
    SHOW_NOTE_MOBILE: (state, action) => {
      return {
        ...state,
        mobile: {
          showFolders: false,
          showNotes: false,
          showNote: true,
        },
      };
    },
  },
});

export const {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_FOLDER_MOBILE,
  SHOW_NOTES_MOBILE,
  SHOW_NOTE_MOBILE,
} = uiSlice.actions;
export default uiSlice.reducer;
