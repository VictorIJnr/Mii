import React, { Component } from "react";
import Header from "../Components/Header";

class Blog extends Component {

    render() {
        return (<div className="site">
            <Header selected="blog" />
        </div>);
    }

}

export default Blog;