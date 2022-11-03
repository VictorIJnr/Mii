import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { faGem } from "@fortawesome/pro-duotone-svg-icons";
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
    
    let location = useLocation();
    let isSelected = location.pathname === props.path;

    let linkedHandleClass = classNames("linked-info-handle", {
        "horizontal-info-handle": props.isHorizontal,
        "vertical-info-handle": !props.isHorizontal,
        "selected-info-handle": isSelected
    });

    let displayIcon = isSelected ? props.selectedIcon : props.icon;

    let childInfoHandle = <InfoHandle {...spreadProps} icon={displayIcon}>{props.children}</InfoHandle>;
    let infoHandle = isSelected
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
    path: PropTypes.string,

    // The Font Awesome Icon to use in the caption if this LinkedInfoHandle is displayed on its path.
    selectedIcon: PropTypes.object
}

LinkedInfoHandle.defaultProps = {
    path: "/",
    selectedIcon: faGem
}

export default LinkedInfoHandle;