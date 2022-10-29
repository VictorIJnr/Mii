import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Link, useLocation } from "react-router-dom";

import InfoHandle from "../InfoHandle";

import "./stylish.css";

/**
 * Provides navigation capabilities to InfoHandles.
 * Displays the same amount of information, however, also allows for navigation to a new path.
 */
function LinkedInfoHandle(props) {
    let spreadProps = {
        ...props
    };

    delete spreadProps.children;
    
    var location = useLocation();
    var isSelected = location.pathname == props.path;

    console.log(location);
    console.log(props.path);

    let linkedHandleClass = classNames("linked-info-handle", {
        "selected-info-handle": isSelected
    });

    var childInfoHandle = <InfoHandle {...props}>{props.children}</InfoHandle>;
    var infoHandle = isSelected
        ? childInfoHandle
        : <Link to={props.path}>{childInfoHandle}</Link>;

    return <div className="linked-info-handle-wrapper">
        <div className={linkedHandleClass}>
            {infoHandle}
        </div>
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