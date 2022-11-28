import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import HighlightImage from "./HighlightImage";

import "./stylish.css";
import "./responsive.css";

/**
 * Displays a brief overview of a project.
 * We're just highlighting the important parts here. We'll have a page dedicated to each project.
 */
function Highlight(props) {
    const highlightClasses = classNames("project-highlight", {
        "reversed-highlight": props.reversed
    });

    return <section className={highlightClasses}>
        <HighlightImage image={props.image} title={props.title} path={props.projectPath} />
        <div className="highlight-description">
            {props.children}
        </div>
    </section>
}

Highlight.propTypes = {
    //? The path to the image to be used for the highlight.
    image: PropTypes.string,

    //? A title for the highlight. What else would this be?
    title: PropTypes.string,

    //? The path to the page containing a full write-up of the project.
    projectPath: PropTypes.string,

    //? Whether the order of the highlight card, and the description should be reversed.
    reversed: PropTypes.bool
}

Highlight.defaultProps = {
    image: "",
    title: "",
    projectPath: "/",
    reversed: false
}

export default Highlight;