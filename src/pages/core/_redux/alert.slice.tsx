import { AlertColor } from "@mui/material";
import {createSlice} from "@reduxjs/toolkit";
export const alertState = {
  open: false,
  type: "success" as AlertColor,
  title: "",
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState: alertState,
  reducers: {
    openDialog: (state,action) => {
      const { open, type, title } = action.payload;
      state.open = open;
      state.type = type;
      state.title = title;
    }
  }
})