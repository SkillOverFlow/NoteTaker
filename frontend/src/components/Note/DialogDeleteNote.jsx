import React from "react";
import { constants } from "../../utils/Constants";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const DialogDeleteNote = ({
  openDialog,
  closeDialog,
  deleteNote,
  noteTitle,
}) => {
  return (
    <Dialog
      open={openDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{constants.deleteNote}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          ¿{constants.sureToDelete} "{noteTitle}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog(false)} color="primary">
          {constants.cancel}
        </Button>
        <Button onClick={deleteNote} color="primary" autoFocus>
          {constants.delete}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
