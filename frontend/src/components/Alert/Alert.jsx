import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle, Error } from "@mui/icons-material";
import { HIDE_ALERT } from "../../redux/reducers/uiReducer";
export const Alert = () => {
  const { alert } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(HIDE_ALERT());

  return (
    <Snackbar
      className={`note__alert ${alert.type ? "note__" + alert.type : ""}`}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={alert.show}
      autoHideDuration={3000}
      onClose={handleClose}
      message={
        <>
          {alert.type === "success" ? <CheckCircle /> : <Error />}
          <span>{alert.message}</span>
        </>
      }
    />
  );
};
