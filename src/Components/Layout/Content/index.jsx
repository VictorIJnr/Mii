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
    const contentClass = classNames("content", props.className);

    const content = <>
        <NavigationMenu />
        
        <div id="main-content" className={classNames({ "padless": props.padless })}>
            {props.children}
        </div>
    </>

    return <>
        {props.id !== ""
            ? <div id={props.id} className={contentClass}>{content}</div>
            : <div className={contentClass}>{content}</div>
        }
    </>
}

Content.propTypes = {
    //? A CSS class to apply custom styling to the content.
    className: PropTypes.string,

    //? The id to give the component.
    id: PropTypes.string,

    //? Whether padding should be removed from the content.
    padless: PropTypes.bool,
}

Content.defaultProps = {
    className: "",
    id: "",
    padless: false,
}

export default Content;