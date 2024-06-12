import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Add the viewport meta tag programmatically
const viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width, initial-scale=1";
document.head.appendChild(viewportMeta);

// Use ReactDOM.createRoot to render the app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
