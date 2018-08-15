import React, { Component } from "react";
import "./stylish.css";

class Picker extends Component {

    render() {
        let classes = "picker nav-link " + (this.props.selected ? "selected" : "");

        return (
            <a className={classes} href={this.props.path}>{this.props.text}</a>
        )
    }

}

export default Picker;