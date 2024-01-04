import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter&family=Libre+Baskerville&family=Poppins:wght@300&display=swap');
</style>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
