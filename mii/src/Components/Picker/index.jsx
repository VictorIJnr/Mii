import React, { Component } from "react";
import "./stylish.css";

class Picker extends Component {

    render() {
        return (
            <a className="picker nav-link" href={this.props.path}>{this.props.text}</a>
        )
    }

}

export default Picker;