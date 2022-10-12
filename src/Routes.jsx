import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Mii from "./Routes/Mii";
import Blog from "./Routes/Blog";
import Cheeky from "./Routes/Cheeky";
import Contact from "./Routes/Contact";

/**
 * Handles routing between the different pages of the website.
 */
function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Mii}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/cheeky" component={Cheeky}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
}

export default Routes;