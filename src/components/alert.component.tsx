import { Alert, Snackbar } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch } from "../hook";
import { IAlert } from "../interfaces/alert.interface";
import * as alertAction from "./../pages/core/_redux/alert.actions";
const AlertComponent: FC<IAlert> = (props) => {
  const dispatch = useAppDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    dispatch(alertAction.openDialog(false, "success", ""));
    // setOpen(false);
  };
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={props.type} sx={{ width: "100%" }}>
        {props.title}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
