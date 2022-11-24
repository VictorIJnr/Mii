import React from "react";
import PropTypes from "prop-types";

import "./stylish.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faDocker, faHtml5, faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/sharp-solid-svg-icons";

/**
 * Renders a list of specified programming languages.
 */
function LanguageWrapper(props) {
    function getLanguageIcon(language) {
        switch (language) {
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

    return <div className="language-wrapper">
        {
            props.languages.map(language => <div>
                <FontAwesomeIcon icon={getLanguageIcon(language)} size="3x" />
            </div>)
        }
    </div>
}

LanguageWrapper.propTypes = {
    //? The languages to be rendered.
    languages: PropTypes.arrayOf(PropTypes.string)
}

LanguageWrapper.defaultProps = {
    languages: ["Kotlin", "Python", "Javascript"]
}

export default LanguageWrapper;