import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import ReactNotification from "react-notifications-component";
import AppComponent from "./components/app/app.component";
import "react-notifications-component/dist/theme.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotification />
      <AppComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
