import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { setupAxios } from "./adapters/setupAxios";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/core/App";

setupAxios(axios, store);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Suspense>
          {/* <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes> */}
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
