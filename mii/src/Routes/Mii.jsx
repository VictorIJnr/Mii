import React, { Component } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cutex from "../assets/Cutex";

class Mii extends Component {

    render() {
        return (<div>
            <Header selected="mii" />
            <Content>
                <h1 id="friendly">
                    <a href="https://www.amazon.co.uk/gp/video/detail/B0160ASALE/
                                ref=atv_dp_pb_core?autoplay=1&t=3868">
                        Hello Friend...
                    </a>
                </h1>
            </Content>

        </div>);
    }

}

export default Mii;