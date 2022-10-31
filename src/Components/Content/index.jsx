import React from "react";
import PropTypes from "prop-types";

import "./stylish.css";
import NavigationBar from "../NavigationBar";
import classNames from "classnames";

/**
 * Standardises large amounts of content on the page.
 * Ensures that each page can be rendered with some level of consistency. 
 */
function Content(props) {
    let padless = (props.padless) ? " padless" : "";

    let contentClass = classNames("content", props.className);
    let gutterClass = classNames("content-gutter", { "padless": props.padless });

    return <div className={contentClass}>
        <div className={gutterClass} />

        <div id="main-content" className={padless}>
            {props.children}
        </div>
        
        {!props.noRightGutter && <div className={gutterClass} />}

        <NavigationBar />
    </div>
}

Content.propTypes = {
    // A CSS class to apply custom styling to the content.
    className: PropTypes.string,

    // Whether padding should be removed from the content.
    padless: PropTypes.bool,

    // Whether the right gutter should be removed 
    noRightGutter: PropTypes.bool
}

Content.defaultProps = {
    className: "",
    padless: false,
    noRightGutter: false
}

export default Content;