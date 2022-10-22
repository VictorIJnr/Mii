import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";

/**
 * Allows navigation to new information.
 * Prior to linking to the information, shows a preview of what the user can expect.
 */
function InfoHandle(props) {
    return <div className="info-handle">
        <FontAwesomeIcon icon={faGem} size="2x"/>
        <h2>{props.infoTitle}</h2>
        {props.children}
    </div>
}

export default InfoHandle;