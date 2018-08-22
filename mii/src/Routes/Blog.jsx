import React, { Component } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cutex from "../assets/Cutex";

class Blog extends Component {

    render() {
        return (<div className="site">
            <Header selected="blog" />
            <Content>
                <Cutex />
            </Content>
        </div>);
    }

}

export default Blog;