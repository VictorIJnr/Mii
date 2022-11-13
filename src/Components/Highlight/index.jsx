import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/sharp-solid-svg-icons";

import "./stylish.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

/**
 * Displays a brief overview of a project.
 * We're just highlighting the important parts here. We'll have a page dedicated to each project.
 */
function Highlight(props) {
    const [isHovered, setIsHovered] = useState(false);

    const imageClasses = classNames("highlight-image", {
        "hovered-image": isHovered
    });

    return <section className="project-highlight">
        <div className="highlight-card">
            <Link to={props.projectPath}>
                <div className="highlight-image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className="highlight-image-overlay" />
                    <img className={imageClasses} src={props.image} alt={props.title} />
                </div>
            </Link>
            
            <div className="highlight-card-info">
                <h3 className="highlight-title">{props.title}</h3>
                <FontAwesomeIcon className="highlight-card-arrow" icon={faArrowRight} size="2x"/>
            </div>
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
    projectPath: PropTypes.string
}

Highlight.defaultProps = {
    image: "",
    title: "Highlight",
    projectPath: "/"
}

export default Highlight;