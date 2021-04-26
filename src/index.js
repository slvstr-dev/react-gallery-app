import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";

import "./index.css";

/**
 * Entry point of React Gallery App
 */
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
