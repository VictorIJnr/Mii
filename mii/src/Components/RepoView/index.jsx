import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faDocker, faHtml5, 
    faJava, faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";

import "./stylish.css";

/**
 * 
 * {
  viewer {
    repositories(first: 3, orderBy: {direction: DESC, field: UPDATED_AT}) {
      nodes {
        name
        description
        url
        languages(first: 10, orderBy: {direction: DESC, field: SIZE}) {
          nodes {
            name
          }
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}

 */

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

        languages.forEach((lang, i) => {
            langRender.push(<FontAwesomeIcon icon={this.getIcon(lang.name)} size="2x" key={i} title={lang.name} />);
        });

        return (<div className={`repo-view${this.props.className ? " " + this.props.className : ""}`}>
            <h1><a href={this.props.repo.url}>{this.props.repo.name}</a></h1>
            {this.props.repo.stargazers.totalCount}
            <FontAwesomeIcon icon={faStar}/>
            <p id="repo-desc">{this.props.repo.description}</p>
            <div className="repo-lang">
                {langRender}
            </div>
        </div>);
    }
}

export default RepoView;