import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { HashRouter } from "react-router-dom";
import "./style.css"
import { AppProvider } from "./Context";
ReactDOM.render(
    <AppProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </AppProvider>

    ,
    document.getElementById("root")
)
