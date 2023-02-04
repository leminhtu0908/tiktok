import { AlertColor } from "@mui/material";
import { Dispatch } from "react";
import { alertSlice } from "./alert.slice";

const { actions } = alertSlice;
export const openDialog =
  (open: boolean, type: AlertColor, title: string) => async (dispatch: any) => {
    return dispatch(actions.openDialog({ open, type, title }));
  };
