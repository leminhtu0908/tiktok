import {createSlice} from "@reduxjs/toolkit";
export const processState = {
  loading: false,
}

export const processSlice = createSlice({
  name: 'process',
  initialState: processState,
  reducers: {
    setLoading: (state,action) => {
      const { loading } = action.payload;
      state.loading = loading;
    }
  }
})