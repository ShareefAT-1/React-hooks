import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Userprovider from "./components/Userprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>

    <Userprovider>
      <App />
    </Userprovider>
    
  </BrowserRouter>
  // </React.StrictMode>
);
