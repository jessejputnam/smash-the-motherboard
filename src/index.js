// Import React tools
import React from "react";
import ReactDOM from "react-dom/client";
// import RouteSwitch from "./components/RouteSwitch";

// Import Components
import App from "./app/App";

// Import CSS
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
