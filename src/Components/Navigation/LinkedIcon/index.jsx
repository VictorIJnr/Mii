import React from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

import { faGem } from "@fortawesome/pro-thin-svg-icons";
import { faGem as faGemSolid } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./stylish.css";

/**
 * Wrapper for FontAwesome icons, so they can be consistently represented as a link.
 * https://github.com/FortAwesome/react-fontawesome/blob/e32a0cbc2d3c944e6cdc6d63d32ca1e275de6e43/src/components/FontAwesomeIcon.js
 */
function LinkedIcon(props) {
    let location = useLocation();
    let isSelected = location.pathname === props.path;

    let displayIcon = isSelected ? props.selectedIcon : props.icon;

    return <div className="linked-icon-wrapper">
        { isSelected
            ? <span className="linked-icon" href={props.path}>
                <FontAwesomeIcon icon={displayIcon} size="1x"/>
                <p>{props.caption}</p>
            </span>
            : <a className="linked-icon" href={props.path}>
                <FontAwesomeIcon icon={displayIcon} size="1x"/>
                <p>{props.caption}</p>
            </a>
        }
    </div>
}

LinkedIcon.propTypes = {
    //? The defualt icon to render when we're not on the path associated with the link.
    icon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),

    //? The icon to render when we're on the path associated with the link.
    selectedIcon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),

    //? The path that should be navigated to upon clicking the icon.
    path: PropTypes.string,
}

LinkedIcon.defaultProps = {
    icon: faGem,
    selectedIcon: faGemSolid,
    path: "/"
}

export default LinkedIcon;