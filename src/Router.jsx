import React from "react";
import { Route, Routes } from "react-router-dom";

import Mii from "./Routes/Mii";
import Blog from "./Routes/Blog";
import Projects from "./Routes/Projects";

/**
 * Handles routing between the different pages of the website.
 */
function Router() {
    return <Routes>
        <Route exact path="/" element={<Mii />}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/projects" element={<Projects />}/>
    </Routes>
}

export default Router;