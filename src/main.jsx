import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./Contextos/AppContext";
import AppCustom from "./Custom/AppCustom";
import Effect from "./Effect/Effect";
import FetchApp from "./FetchApp/FetchApp";
import Local from "./LocalStorage/Local";
import Comentarios from "./Ref/Comentarios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FetchApp /> */}
    {/* <Effect /> */}
    {/* <Local /> */}
    {/* <Comentarios /> */}
    {/* <AppContext /> */}
    <AppCustom />
  </React.StrictMode>
);
