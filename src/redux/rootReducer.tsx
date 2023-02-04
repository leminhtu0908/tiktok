import { combineReducers } from "redux";
import { alertSlice } from "../pages/core/_redux/alert.slice";
import { fileSlice } from "../pages/core/_redux/file.slice";
import { processSlice } from "../pages/core/_redux/process.slice";
const rootReducer = combineReducers({
  alert: alertSlice.reducer,
  file: fileSlice.reducer,
  process: processSlice.reducer,
});

export default rootReducer;
