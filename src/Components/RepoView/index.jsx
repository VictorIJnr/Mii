import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faDocker, faHtml5, 
    faJava, faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";

import "./stylish.css";

class RepoView extends Component {
    getIcon(language) {
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

    renameLangs(languages) {
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

    render() {
        let languages = this.renameLangs(this.props.repo.languages.nodes);
        let langRender = [];
        let numStars = this.props.repo.stargazers.totalCount;
        let starRender = [];

        // Rendering each language and its appropriate icon.
        languages.forEach((lang, i) => {
            langRender.push(<FontAwesomeIcon icon={this.getIcon(lang.name)} size="2x" key={i} title={lang.name} />);
        });

        if (numStars <= 10)
            for (let i = 0; i < numStars; i++) starRender.push(<FontAwesomeIcon icon={faStar} />);
        else {
            starRender.push(<FontAwesomeIcon icon={faStar} />);
            starRender.push(`x ${numStars}`);
        }

        return (<div className={`repo-view${this.props.className ? " " + this.props.className : ""}`}>
            <h1><a href={this.props.repo.url}>{this.props.repo.name}</a></h1>
            <p id="repo-desc">{this.props.repo.description}</p>
            <div className="repo-lang">
                {langRender}
            </div>
            <div title={`${numStars} ${(numStars === 1) ? "star" : "stars"}`} id="repo-stars">
                {starRender}
            </div>
        </div>);
    }
}

export default RepoView;