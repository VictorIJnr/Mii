import React, { useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/pro-light-svg-icons";

import NavigationBar from "../Navigation/NavigationBar";
import NavigationMenu from "../Navigation/NavigationMenu";

import "./stylish.css";

/**
 * Standardises large amounts of content on the page.
 * Ensures that each page can be rendered with some level of consistency. 
 */
function Content(props) {
    const [isNavMenuVisible, setNavVisibility] = useState(true);

    let contentClass = classNames("content", props.className);

    return <div className={contentClass}>
        <NavigationMenu />

        <div id="menu-icon" onClick={() => setNavVisibility(!isNavMenuVisible)}>
            <FontAwesomeIcon icon={faGem} size="2x" />
        </div>
        
        <div id="main-content" className={classNames({ "padless": props.padless })}>
            {props.children}
        </div>
    </div>
}

Content.propTypes = {
    // A CSS class to apply custom styling to the content.
    className: PropTypes.string,

    // Whether padding should be removed from the content.
    padless: PropTypes.bool,
}

Content.defaultProps = {
    className: "",
    padless: false,
}

export default Content;