import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  folderNotes: [],
  activeNote: null,
  activeFolder: null,
  editNote: false,
  showModalFolder: false,
  files: [],
  deleteFiles: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    CREATE_NOTE: (state, action) => {
      return {
        ...state,
        editNote: action.payload.edit,
        activeNote: action.payload.note,
      };
    },
    ALL_FOLDERS: (state, action) => {
      return {
        ...state,
        folders: action.payload.list,
        activeFolder: action.payload.active,
      };
    },
    FOLDER_NOTES: (state, action) => {
      return {
        ...state,
        folderNotes: action.payload,
      };
    },
    ACTIVATE_NOTE: (state, action) => {
      return {
        ...state,
        activeNote: action.payload,
        activeFolder: action.payload.collection,
        editNote: false,
        deleteFiles: [],
      };
    },
    ACTIVATE_FOLDER: (state, action) => {
      return {
        ...state,
        activeFolder: action.payload,
        editNote: false,
      };
    },
    DELETE_NOTE: (state, action) => {
      return {
        ...state,
        folderNotes: state.folderNotes.filter(
          (note) => note.id !== action.payload
        ),
        activeNote: state.folderNotes.length > 1 ? state.folderNotes[1] : null,
      };
    },
    CANCEL_NOTE: (state, action) => {
      return {
        ...state,
        editNote: false,
        activeNote:
          state.activeNote && state.activeNote.id === ""
            ? state.folderNotes[0]
            : {
                ...state.activeNote,
                files: [...state.activeNote.files, ...state.deleteFiles],
              },

        deleteFiles: [],
        files: [],
      };
    },
    SEARCH_NOTE: (state, action) => {
      return {
        ...state,
        folderNotes: action.payload,
        activeNote: action.payload.length > 0 ? action.payload[0] : null,
        activeFolder:
          action.payload.length > 0 ? action.payload[0].collection : null,
      };
    },
    SHOW_MODAL_FOLDER: (state, action) => {
      return {
        ...state,
        showModalFolder: action.payload,
      };
    },
    ADD_NEW_FOLDER: (state, action) => {
      return {
        ...state,
        activeNote: { ...state.activeNote, collection: action.payload },
      };
    },
    LOGOUT_NOTE: (state, action) => {
      return {
        ...initialState,
      };
    },
    SAVE_FILES: (state, action) => {
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    },
    RESET_FILES: (state, action) => {
      return {
        ...state,
        files: [],
      };
    },
    REMOVE_FILES: (state, action) => {
      return {
        ...state,
        activeNote: {
          ...state.activeNote,
          files: state.activeNote.files.filter(
            (f) => f.name !== action.payload.name
          ),
        },
        deleteFiles: [...state.deleteFiles, action.payload],
      };
    },
    REMOVE_UPLAOD_FILES: (state, action) => {
      return {
        ...state,
        files: state.files.filter((f) => f.name !== action.payload.name),
      };
    },
  },
});

export const {
  CREATE_NOTE,
  ALL_FOLDERS,
  FOLDER_NOTES,
  ACTIVATE_NOTE,
  ACTIVATE_FOLDER,
  DELETE_NOTE,
  CANCEL_NOTE,
  SEARCH_NOTE,
  SHOW_MODAL_FOLDER,
  ADD_NEW_FOLDER,
  LOGOUT_NOTE,
  SAVE_FILES,
  RESET_FILES,
  REMOVE_FILES,
  REMOVE_UPLAOD_FILES,
} = noteSlice.actions;
export default noteSlice.reducer;
