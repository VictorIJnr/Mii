import React, { Component } from "react";

import "./stylish.css";

class RepoView extends Component {
    render() {
        return (<div className={`repo-view${this.props.className ? " " + this.props.className : ""}`}>
            <h1>
                <a href={this.props.repo.url}>{this.props.repo.name}</a>
            </h1>
            <p>{this.props.repo.description}</p>
        </div>);
    }
}

export default RepoView;