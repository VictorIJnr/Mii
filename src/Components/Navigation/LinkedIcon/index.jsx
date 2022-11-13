import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

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

    let displayedIcon = isSelected ? props.selectedIcon : props.icon;
    let renderedIcon = <FontAwesomeIcon icon={displayedIcon} size={props.size} />

    let linkContent = <>
        {renderedIcon}
        <p>{props.caption}</p>
    </>

    let linkElement = props.externalLink 
        ? <a className="linked-icon" href={props.path}>{linkContent}</a>
        : <Link className="linked-icon" to={props.path}>{linkContent}</Link>

    return <div className="linked-icon-wrapper">
        { isSelected
            ? <span className="linked-icon selected-linked-icon">{linkContent}</span>
            : linkElement
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

    //? The size of the icon being displayed.
    size: PropTypes.oneOf([
        "2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "1x",
        "2x",
        "3x",
        "4x",
        "5x",
        "6x",
        "7x",
        "8x",
        "9x",
        "10x"
    ]),

    //? Whether the link to point to is external.
    externalLink: PropTypes.bool
}

LinkedIcon.defaultProps = {
    icon: faGem,
    selectedIcon: faGemSolid,
    path: "/",
    size: "1x",
    externalLink: false
}

export default LinkedIcon;