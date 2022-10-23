import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";

/**
 * Displays a caption, which expands to display a larger amount of information.
 */
function InfoHandle(props) {
    return <div className="info-handle-wrapper">
        <div className="info-handle">
            <div className="info-handle-caption">
                <FontAwesomeIcon icon={props.icon} size="1x"/>
                <h2>{props.caption}</h2>
            </div>
            <div className="info-handle-summary">
                {props.children}
            </div>
        </div>
    </div>
}

InfoHandle.propTypes = {
    // The caption to be displayed for the info handle.
    caption: PropTypes.string,

    // The Font Awesome Icon to use in the caption.
    icon: PropTypes.object
}

InfoHandle.defaultProps = {
    caption: "Lorem ipsum",
    icon: faGem
}

export default InfoHandle;