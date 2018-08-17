import React, { Component } from "react";
import Header from "../Components/Header";
import Slideshow from "../Components/Slideshow/Slideshow";
import Content from "../Components/Content";

class Cheeky extends Component {

    render() {
        return (<div className="site">
            <Header selected="cheeky" />
            <Content>
                <Slideshow />
            </Content>
        </div>);
    }

}

export default Cheeky;