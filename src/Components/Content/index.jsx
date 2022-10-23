import React from "react";
import PropTypes from "prop-types";

import "./stylish.css";

/**
 * Standardises large amounts of content on the page.
 * Ensures that each page can be rendered with some level of consistency. 
 */
function Content(props) {
    let padless = (props.padless) ? " padless" : "";

    return <div className={`content${(props.className) ? ` ${props.className}` : ""}`}>
        <div className={"content-gutter" + padless} />

        <div id="main-content" className={padless}>
            {props.children}
        </div>
        
        {!props.noRightGutter && <div className={"content-gutter" + padless} />}
    </div>;
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
    noRightGutter: true
}

export default Content;