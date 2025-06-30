import React from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
// import { removeUploadFile } from "../../redux/actions/noteActions";
import { DeleteOutline } from "@mui/icons-material";
// import { deleteFile } from "../../providers/firebaseService";

export const FileListUpload = ({ files }) => {
  const dispatch = useDispatch();

  const handleDelete = (fileName) => {
    // dispatch(removeUploadFile(fileName));
    // deleteFile(fileName.name);
  };

  return (
    <div className="files-list-edit">
      <h3>Subir</h3>
      {files.map((file, i) => (
        <div className="file-item-edit" key={i}>
          {file.name}
          <IconButton
            aria-label="Eliminar Archivo"
            onClick={() => handleDelete(file)}
          >
            <DeleteOutline />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
