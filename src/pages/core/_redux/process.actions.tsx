
import { processSlice } from "./process.slice";

const { actions } = processSlice;
export const setLoading = (loading: boolean) => (dispatch: any) => {

  return dispatch(actions.setLoading({ loading }));
   
};