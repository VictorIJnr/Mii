import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./stylish.css";

/**
 * Consistently styles a div to contain a separator.
 */
function SeparatorDiv(props) {
    return <>
        {props.id === ""
            ? <div className={classNames("separator-div", props.className)}>{props.children}</div>
            : <div id={props.id} className={classNames("separator-div", props.className)}>{props.children}</div>
        }
    </>
}

SeparatorDiv.propTypes = {
    //? Custom class(es) to be applied to the component.
    className: PropTypes.string,
    
    //? The id to give the component.
    id: PropTypes.string
}

SeparatorDiv.defaultProps = {
    className: "",
    id: ""
}

export default SeparatorDiv;