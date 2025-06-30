import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { dateFormat } from "../../util/dateFormat";
// import { activateNote } from "../../redux/actions/noteActions";
import empty from "../../assets/images/empty.svg";
// import { showNoteMobile } from "../../redux/actions/uiActions";
import { constants } from "../../utils/Constants";

export const NoteList = () => {
  const showNotes = useSelector((state) => state.ui.mobile.showNotes);
  const folderNotes = useSelector((state) => state.notes.folderNotes);
  const activeNote = useSelector((state) => state.notes.activeNote);
  const dispatch = useDispatch();

  const handleActivateNote = (note) => {
    // dispatch(activateNote(note));
  };

  return (
    <div className={`notelist ${!showNotes ? "no-show" : "show"}`}>
      {folderNotes.length > 0 ? (
        <List aria-label={constants.noteList}>
          {folderNotes.map((note) => (
            <ListItem
              key={note.id}
              button
              className={
                note.id === (activeNote && activeNote.id)
                  ? "notelist-active"
                  : ""
              }
              onClick={() => handleActivateNote(note)}
            >
              <ListItemText primary={note.title} />
              <div className="notelist-date">
                {note.file && <AttachFile />}
                <span>{dateFormat(note.date)}</span>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
        <div className="no-notes">
          <img src={empty} alt={constants.noNotesFound} />
          <span>{constants.noNotesFound}</span>
        </div>
      )}
    </div>
  );
};
