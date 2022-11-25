import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faCss3Alt, faDocker, faHtml5, faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/sharp-solid-svg-icons";

import "./stylish.css";

/**
 * Renders a list of the various specified technologies.
 */
function TechnologyWrapper(props) {
    function getIcon(technology) {
        switch (technology) {
            case "Android":
                return faAndroid;
            case "CSS":
                return faCss3Alt;
            case "Docker":
            case "Dockerfile":
                return faDocker;
            case "HTML":
                return faHtml5;
            case "Java":
            case "Processing":
                return faJava;
            case "JavaScript":
                return faJs;
            case "Python":
                return faPython;
            default:
                return faCode;
        }
    }

    function getHoverColour(technology) {
        switch (technology) {
            case "Android":
                return faAndroid;
            case "CSS":
                return faCss3Alt;
            case "Docker":
            case "Dockerfile":
                return faDocker;
            case "HTML":
                return faHtml5;
            case "Java":
            case "Processing":
                return faJava;
            case "JavaScript":
                return faJs;
            case "Python":
                return faPython;
            default:
                return faCode;
        }
    }

    return <div className="technology-wrapper">
        {
            props.technologies.map(technology => <FontAwesomeIcon icon={getIcon(technology)} size="3x" title={technology} key={technology} />)
        }
    </div>
}

TechnologyWrapper.propTypes = {
    //? The technologies to be rendered.
    technologies: PropTypes.arrayOf(PropTypes.string)
}

TechnologyWrapper.defaultProps = {
    technologies: ["Kotlin", "Python", "Javascript"]
}

export default TechnologyWrapper;