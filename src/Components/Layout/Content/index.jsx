import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import NavigationMenu from "../../Navigation/NavigationMenu";

import "./stylish.css";
import "./responsive.css";

/**
 * Standardises large amounts of content on the page.
 * Ensures that each page can be rendered with some level of consistency. 
 */
function Content(props) {
    let contentClass = classNames("content", props.className);

    return <div className={contentClass}>
        <NavigationMenu />
        
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