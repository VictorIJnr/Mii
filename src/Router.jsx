import React from "react";
import { Route, Routes } from "react-router-dom";

import Mii from "./Routes/Mii";
import Blog from "./Routes/Blog";
import Cheeky from "./Routes/Cheeky";

/**
 * Handles routing between the different pages of the website.
 */
function Router() {
    return <Routes>
        <Route exact path="/" element={<Mii />}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/cheeky" element={<Cheeky />}/>
    </Routes>
}

export default Router;