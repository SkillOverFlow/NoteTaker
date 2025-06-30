import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { constants } from "../../utils/Constants";
import { AttachFile, Delete, Edit } from "@mui/icons-material";
import { DialogFiles } from "./DialogFiles";

export const NoteView = ({ note, edit, openModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const closeMenuFiles = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className="note-view">
      <div className="note-actionbar">
        <Tooltip title={constants.edit}>
          <IconButton aria-label={constants.edit} onClick={edit}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title={constants.delete}>
          <IconButton
            aria-label={constants.delete}
            onClick={() => openModal(true)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
        {note.files.length > 0 && (
          <>
            <Tooltip title={constants.delete}>
              <IconButton
                aria-label={constants.delete}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <AttachFile />
              </IconButton>
            </Tooltip>

            <DialogFiles
              files={note.files}
              handleClose={closeMenuFiles}
              anchorEl={anchorEl}
            />
          </>
        )}
      </div>

      <div className="note-wrap">
        <h2 className="note-title">{note.title}</h2>
        <div
          className="note-body"
          dangerouslySetInnerHTML={{ __html: note.body }}
        ></div>
      </div>
    </div>
  );
};
