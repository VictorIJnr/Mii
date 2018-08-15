import React, { Component } from "react";
import "./stylish.css";
import { Link } from "react-router-dom";

class Picker extends Component {

    render() {
        let classes = "picker nav-link " + (this.props.selected ? "selected" : "");

        return (
            <Link className={classes} to={this.props.path}>{this.props.text}</Link>
        )
    }

}

export default Picker;