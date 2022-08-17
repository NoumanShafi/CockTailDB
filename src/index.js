import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "./style.css"
import { AppProvider } from "./Context";
ReactDOM.render(
    <AppProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppProvider>

    ,
    document.getElementById("root")
)
