import * as dotenv from "dotenv";

import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./Components/Navigation/ScrollToTop";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

dotenv.config();

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <App />
    </BrowserRouter>,
    document.getElementById("root"));

registerServiceWorker();