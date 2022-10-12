import React from "react";

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
        
        <div className={"content-gutter" + padless} />
    </div>;
}

export default Content;