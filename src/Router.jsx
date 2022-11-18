import React from "react";
import { Route, Routes } from "react-router-dom";

import Mii from "./Routes/Mii";
import Playground from "./Routes/Playground";

import Projects from "./Routes/Projects/";
import Bloopy from "./Routes/Projects/Bloopy/";

/**
 * Handles routing between the different pages of the website.
 */
function Router() {
    return <Routes>
        <Route path="/" element={<Mii />}/>
        <Route path="/playground" element={<Playground />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/bloopy" element={<Bloopy />} />
    </Routes>
}

export default Router;