import { useNavigate } from "react-router-dom";
import * as alertAction from "./../pages/core/_redux/alert.actions";
import * as processAction from "./../pages/core/_redux/process.actions";
export function setupAxios(axios: any, store: any) {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config: any) => {
      const users = JSON.parse(localStorage.getItem("users") as string);
      if (users?.token) {
        config.headers["Authorization"] = "Bearer " + users.token;
      }
      store.dispatch(processAction.setLoading(true));
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error: any) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: any) => {
      store.dispatch(processAction.setLoading(false));
      return response;
    },
    (error: any) => {
      let errorMessage: any = "";
      if (error.response.status === 500) {
        store.dispatch(processAction.setLoading(false));
        errorMessage = "Có lỗi xảy ra vui lòng liên hệ quản trị viên!";
        // store.dispatch(alertAction.openDialog(true, 'error', "Có lỗi xảy ra vui lòng liên hệ quản trị viên!"))
      }

      if (error.response?.data?.message) {
        errorMessage = error.response?.data?.message;
      } else {
        errorMessage =
          error.response?.data?.errorMessage ||
          Object.values(error.response?.data?.error)[0];
      }

      store.dispatch(processAction.setLoading(false));
      store.dispatch(alertAction.openDialog(true, "error", errorMessage));
      if (error.response.status === 401) {
        window.location = "/login" as unknown as Location;
        localStorage.clear();
      }
      return error;
    }
  );
}
