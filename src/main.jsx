import React from "react";
import ReactDOM from "react-dom/client";
import "./lang/i18n.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./context/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
