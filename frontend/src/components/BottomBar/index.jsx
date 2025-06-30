import React from "react";
import { IconButton } from "@mui/material";
import { Add, Folder, Note } from "@mui/icons-material";
import { useDispatch } from "react-redux";
// import { newNote } from "../../redux/actions/noteActions";
import { NoteModel } from "../../models/noteModel";
import {
  SHOW_FOLDER_MOBILE,
  SHOW_NOTES_MOBILE,
  SHOW_NOTE_MOBILE,
} from "../../redux/reducers/uiReducer";

export const BottomBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bottom-bar">
      <IconButton
        aria-label="folders"
        onClick={() => dispatch(SHOW_FOLDER_MOBILE())}
      >
        <Folder />
      </IconButton>
      <IconButton
        aria-label="agregar"
        onClick={() => {
          //   dispatch(newNote(NoteModel));
          dispatch(SHOW_NOTE_MOBILE());
        }}
      >
        <Add />
      </IconButton>
      <IconButton
        aria-label="notas"
        onClick={() => dispatch(SHOW_NOTES_MOBILE())}
      >
        <Note />
      </IconButton>
    </div>
  );
};
