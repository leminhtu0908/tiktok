import {createSlice} from "@reduxjs/toolkit";
export const fileState = {
  url: "",
  isLoading: false,
}
export const fileSlice = createSlice({
  name: 'files',
  initialState: fileState,
  reducers: {
    startCall: (state,action) => {
      state.url = ""
      state.isLoading = true;
    },
    catchError: (state,action) => {
      state.url = ""
      state.isLoading = false;
    },
    uploadFile: (state,action) => {
      const { url } = action.payload.data;
      state.url = url;
      state.isLoading = false;
    },
    
  }
})