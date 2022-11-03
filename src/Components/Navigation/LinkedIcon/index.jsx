import React from "react";
import PropTypes from "prop-types";
import { faGem } from "@fortawesome/pro-thin-svg-icons";

/**
 * Wrapper for FontAwesome icons, so they can be consistently represented as a link.
 * https://github.com/FortAwesome/react-fontawesome/blob/e32a0cbc2d3c944e6cdc6d63d32ca1e275de6e43/src/components/FontAwesomeIcon.js
 */
function LinkedIcon(props) {
    return <div className="linked-icon-wrapper">
        <a className="linked-icon" href={props.path}>
            <FontAwesomeIcon icon={props.icon} size="1x"/>
            <p>{props.caption}</p>
        </a>
    </div>
}

LinkedIcon.propTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),


    // The path that should be navigated to upon clicking the icon.
    path: PropTypes.string,
}

LinkedIcon.defaultProps = {
    icon: faGem,
    path: "/"
}

export default LinkedIcon;