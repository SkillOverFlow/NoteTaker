import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNotesFolder, newNote } from "../../redux/actions/noteActions";
import { SHOW_NOTES_MOBILE } from "../../redux/reducers/uiReducer";
import { NoteModel } from "../../models/noteModel";
import { Folder } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const Categories = () => {
  const dispatch = useDispatch();
  const activeFolder = useSelector((state) => state.notes.activeFolder);
  const folders = useSelector((state) => state.notes.folders);
  const showFolders = useSelector((state) => state.ui.mobile.showFolders);

  //   const createNoteBtn = () => dispatch(newNote(NoteModel));
  const createNoteBtn = () => {};

  const handleActivateFolder = (folder) => {
    // dispatch(getNotesFolder(folder));
    dispatch(SHOW_NOTES_MOBILE());
  };

  return (
    <aside className={`categories ${!showFolders ? "no-show" : "show"}`}>
      <div className="categories-btn">
        <Button onClick={createNoteBtn}>Create New Note</Button>
      </div>
      <div className="categories-folders">
        <List component="nav" aria-label="folders">
          {folders.map((folder) => (
            <ListItem
              button
              className={folder === activeFolder ? "folder-active" : ""}
              key={folder}
              onClick={() => handleActivateFolder(folder)}
            >
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary={folder} />
            </ListItem>
          ))}
        </List>
      </div>
    </aside>
  );
};
