import React from "react";

import { Link } from "react-router-dom";

import "./stylish.css";

function Picker() {

    let classes = "picker nav-link " + (this.props.selected ? "selected" : "");

    return <Link className={classes} to={this.props.path}>{this.props.text}</Link>
}

export default Picker;