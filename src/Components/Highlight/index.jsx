import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/sharp-solid-svg-icons";

import classNames from "classnames";
import { Link } from "react-router-dom";

import "./stylish.css";
import "./responsive.css";

/**
 * Displays a brief overview of a project.
 * We're just highlighting the important parts here. We'll have a page dedicated to each project.
 */
function Highlight(props) {
    const [isHovered, setIsHovered] = useState(false);

    const highlightClasses = classNames("project-highlight", {
        "reversed-highlight": props.reversed
    });

    const imageClasses = classNames("highlight-image", {
        "hovered-image": isHovered
    });

    const overlayClasses = classNames("highlight-image-overlay", {
        "hovered-image": isHovered
    })

    const cardInfoClasses = classNames("highlight-card-info", {
        "hovered-image": isHovered
    });

    return <section className={highlightClasses}>
        <div className="highlight-card">
            <Link to={props.projectPath}>
                <div className="highlight-image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className={overlayClasses} />
                    <div className={cardInfoClasses}>
                        <h3 className="highlight-title">{props.title}</h3>
                        <FontAwesomeIcon className="highlight-card-arrow" icon={faArrowRight} size="2x"/>
                    </div>

                    <img className={imageClasses} src={props.image} alt={props.title} />
                </div>
            </Link>
        </div>
        <div className="highlight-description">
            {props.children}
        </div>
    </section>
}

Highlight.propTypes = {
    //? The path to the image to be used for the highlight.
    image: PropTypes.string,

    //? A title for the highlight. What else would this be?
    title: PropTypes.string,

    //? The path to the page containing a full write-up of the project.
    projectPath: PropTypes.string,

    //? Whether the order of the highlight card, and the description should be reversed.
    reversed: PropTypes.bool
}

Highlight.defaultProps = {
    image: "",
    title: "Highlight",
    projectPath: "/",
    reversed: false
}

export default Highlight;