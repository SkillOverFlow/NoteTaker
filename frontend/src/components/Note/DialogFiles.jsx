import React from "react";
import { Menu, MenuItem } from "@mui/material";

export const DialogFiles = ({ files, handleClose, anchorEl }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className="menu-files"
    >
      {files.map((file, i) => (
        <MenuItem key={i} onClick={handleClose}>
          <a href={file.url} rel="noreferrer" target="_blank">
            {file.name}
          </a>
        </MenuItem>
      ))}
    </Menu>
  );
};
