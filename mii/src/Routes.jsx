import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Mii from "./Routes/Mii";
import Blog from "./Routes/Blog";
import Cheeky from "./Routes/Cheeky";
import Contact from "./Routes/Contact";
import Header from "./Components/Header";

class Routes extends Component {

    render() {
        return (<Switch>
            <Route exact path="/" component={Mii}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/cheeky" component={Cheeky}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>);
    }

}

export default Routes;