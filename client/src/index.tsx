import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/home.page";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
