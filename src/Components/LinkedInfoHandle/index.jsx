import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import InfoHandle from "../InfoHandle";

/**
 * Provides navigation capabilities to InfoHandles.
 * Displays the same amount of information, however, also allows for navigation to a new path.
 */
function LinkedInfoHandle(props) {
    let spreadProps = {
        ...props
    };

    delete spreadProps.children;

    return <div className="linked-info-handle">
        <Link to={props.path}>
            <InfoHandle {...props}>{props.children}</InfoHandle>
        </Link>
    </div>
}

LinkedInfoHandle.propTypes = {
    ...InfoHandle.propTypes,

    // The path that should be navigated to upon clicking the InfoHandle.
    path: PropTypes.string
}

LinkedInfoHandle.defaultProps = {
    path: "/"
}

export default LinkedInfoHandle;