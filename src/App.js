import React from "react";

import Router from "./Router";

import "./variables.css";

/**
 * Initial component to handle the rendering of the entire website.
 */
function App() {
    return <div id="site">
        <Router />
    </div>
}

export default App;