import React, { Component } from "react";

import "./stylish.css";

class RepoSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }
    }

    setSelection(key) {
        this.setState({selected: key});
        this.props.selectRepo(key);
    }

    render() {
        return (<ul className="repo-selector">
            {this.props.repos.map((repo, i) => 
                (<li className={this.state.selected === i ? "repo-selected" : ""} key={i}>
                    <button onClick={() => this.setSelection(i)}>{repo.name}</button>
                </li>)
            )}
        </ul>);
    }
}

export default RepoSelector;