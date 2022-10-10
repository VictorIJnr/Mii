import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Mii from "./Routes/Mii";
import Blog from "./Routes/Blog";
import Cheeky from "./Routes/Cheeky";
import Contact from "./Routes/Contact";

class Routes extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Mii}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/cheeky" component={Cheeky}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>;
    }
}

export default Routes;