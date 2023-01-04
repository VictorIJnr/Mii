import React from "react";
import PropTypes from "prop-types";

import "./stylish.css";

/* 
    Consistently renders links to external websites.
*/
function TextLink(props) {
    return <a className="text-link" href={props.url}>{props.text}</a>
}

TextLink.propTypes = {
    //? The text that should be rendered for the link.
    text: PropTypes.string.isRequired,

    //? The destination URL to take the user upon click.
    url: PropTypes.string.isRequired
}

export default TextLink;