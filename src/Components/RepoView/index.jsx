import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faDocker, faHtml5, faJava, faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";

import "./stylish.css";

function RepoView(props) {
    var getIcon = language => {
        switch(language) {
            case "CSS":
                return faCss3Alt;
            case "Docker": case "Dockerfile":
                return faDocker;
            case "HTML":
                return faHtml5;
            case "Java": case "Processing":
                return faJava;
            case "JavaScript":
                return faJsSquare;
            case "Python":
                return faPython;
            default:
                return faTerminal;
        }
    }

    var renameLangs = languages => {
        for (let i = 0; i < languages.length; i++) {
            switch(languages[i].name) {
                case "Dockerfile":
                    languages[i].name = "Docker";
                    break;
                case "Shell":
                    languages[i].name = "Bash";
                    break;
                default:
                    break;
            }
        }

        return languages;
    }

    let languages = renameLangs(props.repo.languages.nodes);
    let langRender = [];
    let numStars = props.repo.stargazers.totalCount;
    let starRender = [];

    // Rendering each language and its appropriate icon.
    languages.forEach((lang, i) => {
        langRender.push(<FontAwesomeIcon icon={getIcon(lang.name)} size="2x" key={i} title={lang.name} />);
    });

    if (numStars <= 10) for (let i = 0; i < numStars; i++) starRender.push(<FontAwesomeIcon icon={faStar} />);
    else {
        starRender.push(<FontAwesomeIcon icon={faStar} />);
        starRender.push(`x ${numStars}`);
    }

    return <div className={`repo-view${props.className ? " " + props.className : ""}`}>
        <h1><a href={props.repo.url}>{props.repo.name}</a></h1>
        <p id="repo-desc">{props.repo.description}</p>
        <div className="repo-lang">
            {langRender}
        </div>
        <div title={`${numStars} ${(numStars === 1) ? "star" : "stars"}`} id="repo-stars">
            {starRender}
        </div>
    </div>;
}

export default RepoView;