// import { types } from "../types/types";
import { hideLoader, showAlert, showLoader, showNoteMobile } from "./uiActions";
import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_NOTE_MOBILE,
} from "../reducers/uiReducer";
import {
  ACTIVATE_FOLDER,
  ACTIVATE_NOTE,
  ALL_FOLDERS,
  FOLDER_NOTES,
} from "../reducers/noteReducer";
import {
  //   deleteFile,
  getNotes,
  saveNote,
} from "../../providers/firebaseService";
import { db } from "../../providers/firebase";
import { constants } from "../../utils/Constants";
import { UserModel } from "../../models/userModel";

export const userNotes = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    try {
      dispatch(SHOW_LOADER());
      alert(auth);
      const userdata = await db.doc(`${auth.uid}/notes`).get();
      if (userdata.data()) {
        const folders = userdata.data().folders;
        dispatch(
          ALL_FOLDERS({
            list: folders,
            active: folders.length > 0 ? folders[0] : null,
          })
        );
        if (folders.length > 0) {
          dispatch(getNotesFolder(folders[0]));
          dispatch(SHOW_NOTE_MOBILE());
        }
      } else {
        const user = UserModel;
        user.uid = auth.uid;
        user.name = auth.name;
        user.email = auth.email;
        user.photo = auth.photoUrl;

        await db.collection(auth.uid).doc("user").set(user);
      }
      dispatch(HIDE_LOADER());
    } catch (error) {
      dispatch(HIDE_LOADER());
      dispatch(
        SHOW_ALERT({ message: constants.userNotesError, type: constants.error })
      );
    }
  };
};

export const saveNewNote = (note) => {
  return async (dispatch, getState) => {
    const { auth, notes } = getState();
    const folderExists = notes.folders.find((f) => f === note.collection);
    dispatch(showLoader());

    try {
      const newNote = await saveNote(auth.uid, note);
      if (notes.folders.length > 0) {
        if (!folderExists) {
          await db
            .doc(`${auth.uid}/notes`)
            .update({ folders: [note.collection, ...notes.folders] });
          dispatch(getAllFolders([note.collection, ...notes.folders]));
        }
      } else {
        await db
          .collection(auth.uid)
          .doc("notes")
          .set({
            folders: [note.collection],
          });
        dispatch(getAllFolders([note.collection]));
      }

      if (note.collection !== notes.activeFolder) {
        dispatch(getNotesFolder(note.collection));
      } else {
        dispatch(folderNotes([newNote, ...notes.folderNotes]));
        dispatch(activateNote(newNote));
      }
      dispatch(resetFiles());
      dispatch(hideLoader());
      dispatch(showAlert(constants.saveNoteSuccess, constants.alertSuccess));
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert(constants.saveNoteError, constants.alertError));
    }
  };
};

export const getNotesFolder = (folder) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    dispatch(SHOW_LOADER());
    try {
      const notes = await getNotes(uid, folder);
      dispatch(ACTIVATE_FOLDER(folder));
      dispatch(FOLDER_NOTES(notes.docs.map((doc) => doc.data())));
      dispatch(ACTIVATE_NOTE(notes.docs[0].data()));
      dispatch(HIDE_LOADER());
    } catch (error) {
      dispatch(HIDE_LOADER());
      dispatch(
        SHOW_ALERT({
          message: constants.getNotesError,
          type: constants.alertError,
        })
      );
    }
  };
};

export const updateNote = (note) => {
  return async (dispatch, getState) => {
    const { notes, auth } = getState();
    const noteList = notes.folderNotes.filter((n) => n.id !== note.id);
    dispatch(showLoader());

    try {
      await db.doc(`${auth.uid}/notes/list/${note.id}`).update(note);

      if (note.collection !== notes.activeFolder) {
        if (notes.folderNotes.length === 1) {
          const updateFolders = notes.folders.filter(
            (folder) => folder !== notes.activeFolder
          );
          await db.doc(`${auth.uid}/notes`).update({ folders: updateFolders });
          dispatch(getAllFolders(updateFolders));
        }
        if (!notes.folders.includes(note.collection)) {
          await db
            .doc(`${auth.uid}/notes`)
            .update({ folders: [note.collection, ...notes.folders] });
          dispatch(getAllFolders([note.collection, ...notes.folders]));
        }
        dispatch(getNotesFolder(note.collection));
      } else {
        dispatch(folderNotes([note, ...noteList]));
        dispatch(activateNote(note));
      }
      dispatch(cancelNoteEdit());
      dispatch(resetFiles());
      dispatch(hideLoader());
      dispatch(showAlert(constants.updateNoteSuccess, constants.alertSuccess));
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert(constants.updateNoteError, constants.alertError));
    }
  };
};

export const deleteNote = () => {
  return async (dispatch, getState) => {
    const { notes, auth } = getState();
    const updateList = notes.folders.filter(
      (f) => f !== notes.activeNote.collection
    );
    dispatch(showLoader());

    try {
      await db.doc(`${auth.uid}/notes/list/${notes.activeNote.id}`).delete();
      dispatch(hideLoader());
      dispatch(showAlert("Nota eliminada", "success"));

      if (notes.activeNote.files.length > 0) {
        // notes.activeNote.files.map((file) => deleteFile(file.name));
      }
      dispatch(removeNote(notes.activeNote.id));

      if (notes.folderNotes.length === 1) {
        dispatch(getAllFolders(updateList));
        if (updateList.length > 0) {
          dispatch(getNotesFolder(updateList[0]));
        }
        await db.doc(`${auth.uid}/notes`).update({ folders: updateList });
      }
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert(constants.deleteNoteError, constants.alertError));
    }
  };
};

export const getAll = (search) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    dispatch(showLoader());
    try {
      const data = await db.collection(`${uid}/notes/list`).get();
      const notes = data.docs
        .map((doc) => doc.data())
        .filter(
          (doc) => doc.title.includes(search) || doc.body.includes(search)
        );
      dispatch(searchNotes(notes));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert(constants.searchNoteError, constants.alertError));
    }
  };
};

// export const cancelNoteEdit = () => ({
//   type: types.cancelNote,
//   payload: false,
// });

// export const activateNote = (note) => ({
//   type: types.activateNote,
//   payload: note,
// });

// export const activateFolder = (folder) => ({
//   type: types.activateFolder,
//   payload: folder,
// });

// export const newNote = (note) => ({
//   type: types.createNote,
//   payload: {
//     edit: true,
//     note,
//   },
// });

// export const resetNotes = () => ({
//   type: types.logoutNote,
// });

// const getAllFolders = (folders) => ({
//   type: types.folders,
//   payload: {
//     list: folders,
//     active: folders.length > 0 ? folders[0] : null,
//   },
// });

// const folderNotes = (notes) => ({
//   type: types.notes,
//   payload: notes,
// });

// const removeNote = (noteId) => ({
//   type: types.deleteNote,
//   payload: noteId,
// });

// const searchNotes = (notes) => ({
//   type: types.searchNote,
//   payload: notes,
// });

// export const showModalFCreateFolder = (show) => ({
//   type: types.showModalFolder,
//   payload: show,
// });

// export const addFolder = (folder) => ({
//   type: types.addNewFolder,
//   payload: folder,
// });

// export const saveFiles = (files) => ({
//   type: types.saveFiles,
//   payload: files,
// });
// export const resetFiles = () => ({
//   type: types.resetFiles,
// });

// export const removeFile = (file) => ({
//   type: types.removeFiles,
//   payload: file,
// });

// export const removeUploadFile = (file) => ({
//   type: types.removeUploadFiles,
//   payload: file,
// });
