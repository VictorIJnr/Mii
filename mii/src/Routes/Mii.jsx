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
                    <a href="https://www.amazon.co.uk/gp/video/
                                detail/B015RPBRF4/ref=atv_dp_season_select_atf">
                        Hello Friend...
                    </a>
                </h1>
            </Content>

        </div>);
    }

}

export default Mii;