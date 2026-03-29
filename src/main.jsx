import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

// index.html has <div id="root">; this mounts the whole React tree there.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
