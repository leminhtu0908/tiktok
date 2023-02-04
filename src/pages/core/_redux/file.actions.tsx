import * as requestFromServer from "./file.crud";
import { fileSlice} from "./file.slice";

const { actions } = fileSlice;
export const uploadImage = (data: any) => async(dispatch: any) => {
  dispatch(actions.startCall({}));
  return requestFromServer
    .uploadFile(data)
    .then((response) => {
      const { data } = response.data;
      dispatch(actions.uploadFile({ data }));
      return data;
    })
    .catch((error) => {
      dispatch(actions.catchError({}));
      return null;
    });
};