import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./stylish.css";

/**
 * Consistently styles a div to contain a separator.
 */
function SeparatorDiv(props) {
    return <div className={classNames("separator-div", props.className)}>
        {props.children}
    </div>
}

SeparatorDiv.propTypes = {
    //? Custom class(es) to be applied to the component.
    className: PropTypes.string
}

SeparatorDiv.defaultProps = {
    className: ""
}

export default SeparatorDiv;