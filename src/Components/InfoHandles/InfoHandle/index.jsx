import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";
import classNames from "classnames";

/**
 * Displays a caption, which expands to display a larger amount of information.
 */
function InfoHandle(props) {
    var infoHandleClass = classNames("info-handle", {
        "horizontal-info-handle": props.isHorizontal,
        "vertical-info-handle": !props.isHorizontal,
    });
    
    return <div className="info-handle-wrapper">
        <div className={infoHandleClass}>
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
    icon: PropTypes.object,

    // Whether the InfoHandle should be rendered horizontally.
    // i.e. stacked with the caption above the summary, instead of to the left.
    isHorizontal: PropTypes.bool
}

InfoHandle.defaultProps = {
    caption: "Lorem ipsum",
    icon: faGem,
    isHorizontal: false
}

export default InfoHandle;