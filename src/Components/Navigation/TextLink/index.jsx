import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./stylish.css";

/* 
    Consistently renders links to external websites.
*/
function TextLink(props) {
    return <>
        {props.path !== ""
        ? <Link to={props.path} className="text-link">{props.text}</Link>
        : <a className="text-link" href={props.url}>{props.text}</a>
    }
    </>
}

TextLink.propTypes = {
    //? The text that should be rendered for the link.
    text: PropTypes.string.isRequired,
    
    //? The path, within Mii, where the user should be taken.
    path: PropTypes.string,

    //? The destination URL to take the user upon click.
    url: PropTypes.string
}

TextLink.defaultProps = {
    path: "",
    url: ""
}

export default TextLink;