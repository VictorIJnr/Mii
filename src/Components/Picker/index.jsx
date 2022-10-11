import React from "react";

import { Link } from "react-router-dom";

import "./stylish.css";

function Picker(props) {
    let classes = "picker nav-link " + (props.selected ? "selected" : "");

    return <Link className={classes} to={props.path}>{props.text}</Link>
}

export default Picker;