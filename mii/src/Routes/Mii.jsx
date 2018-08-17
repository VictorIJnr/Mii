import React, { Component } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cutex from "../assets/Cutex";

class Mii extends Component {

    render() {
        return (<div>
            <Header selected="mii" />
            <Content>
                <Cutex />
            </Content>
        </div>);
    }

}

export default Mii;