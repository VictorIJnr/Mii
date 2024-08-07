import React from "react";
import { Route, Routes } from "react-router-dom";

import Mii from "./Routes/Mii";
import Career from "./Routes/Career";
import Playground from "./Routes/Playground";

import Projects from "./Routes/Projects/";
import Bloopy from "./Routes/Projects/Bloopy/";
import UStylA from "./Routes/Projects/bu";
import WaffleCo from "./Routes/Projects/WaffleCo";
import NotFound from "./Routes/NotFound";

/**
 * Handles routing between the different pages of the website.
 */
function Router() {
    return <Routes>
        <Route path="/" element={<Mii />}/>
        <Route path="/career" element={<Career />} />
        <Route path="/playground" element={<Playground />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/bloopy" element={<Bloopy />} />
        <Route path="/projects/bu" element={<UStylA />} />
        <Route path="/projects/waffles" element={<WaffleCo />} />
        
        <Route path="*" element={<NotFound />} />
    </Routes>
}

export default Router;