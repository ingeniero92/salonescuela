import "core-js";
import "core-js/es/map";
import "core-js/es/set";
import "core-js/es/array/find";
import "core-js/es/array/includes";
import "core-js/es/number/is-nan";
import "raf";
import "raf/polyfill";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);