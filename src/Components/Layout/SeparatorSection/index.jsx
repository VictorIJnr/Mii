import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./stylish.css";

/**
 * Consistently styles a section to contain a separator.
 */
function SeparatorSection(props) {
    // This ternary statement has a miniscule impact, but I know I'd be annoyed if I saw an empty ID in the inspector.
    return <>
        {props.id === "" 
            ? <section className={classNames("separator-section", props.className)}>{props.children}</section>
            : <section id={props.id} className={classNames("separator-section", props.className)}>{props.children}</section>
        }
    </>
}

SeparatorSection.propTypes = {
    //? Custom class(es) to be applied to the component.
    className: PropTypes.string,

    //? The id to give the component.
    id: PropTypes.string
}

SeparatorSection.defaultProps = {
    className: "",
    id: ""
}

export default SeparatorSection;