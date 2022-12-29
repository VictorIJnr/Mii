import React, { useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { faArrowRight } from "@fortawesome/sharp-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import "../stylish.css";
import "../responsive.css";

/**
 * Displays an image as a "card".
 * Optionally gives the image a title, or allows the image to link to a new path.
 */
function HighlightImage(props) {
    const [isHovered, setIsHovered] = useState(false);

    const isImageSVG = props.image.endsWith(".svg");

    console.log(`[HighlightImage] Is this a fucking SVG:\t${isImageSVG}`);

    const linkClasses = classNames({
        "highlight-link": !isImageSVG,
        "highlight-svg-link": isImageSVG
    });

    const overlayClasses = classNames("highlight-image-overlay", {
        "hovered-image": isHovered
    });

    const cardInfoClasses = classNames("highlight-card-info", {
        "hovered-image": isHovered
    });

    const imageClasses = classNames("highlight-image", {
        "hovered-image": isHovered,
        "highlight-svg-image": isImageSVG
    });

    const cardContent = <div className="highlight-image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={overlayClasses} />
        <div className={cardInfoClasses}>
            <h3 className="highlight-title">{props.title}</h3>
            {props.path !== "" && <FontAwesomeIcon className="highlight-card-arrow" icon={faArrowRight} size="2x"/>}
        </div>
        <img className={imageClasses} src={props.image} alt={props.title} />
    </div>

    return <div className="highlight-card">
        {props.path !== ""
            ? <Link to={props.path} className={linkClasses}>{cardContent}</Link>
            : cardContent
        }
    </div>
}

HighlightImage.propTypes = {
    //? The image to be displayed.
    image: PropTypes.string,

    //? A title for the card.
    title: PropTypes.string,

    //? The path the card should link to.
    path: PropTypes.string
}

HighlightImage.defaultProps = {
    image: "",
    path: "",
    title: ""
}

export default HighlightImage;