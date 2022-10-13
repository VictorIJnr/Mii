import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";

/**
 * Displays a little bit of information.
 * That's all.
 * Well, maybe it adds a little link to a new page.
 */
function InfoBubble(props) {
    return <div className="info-bubble">
        <FontAwesomeIcon icon={faGem} size="2x"/>
        <h2>{props.infoTitle}</h2>
        {props.children}
    </div>
}

export default InfoBubble;