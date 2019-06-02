import React, { Component } from "react";

import RepoView from "../RepoView";

import "./stylish.css";
import Content from "../Content";
import RepoSelector from "../RepoSelector";

/**
* Wrapper for the RepoView Component.
*/
class RepoWrapper extends Component {
    constructor(props) {
        super(props);

        this.handleSelection = this.handleSelection.bind(this);

        this.state = {
            selected: 0
        };
    }

    handleSelection(index) {
        this.setState({selected: index});
    }

    render() {
        let repoRender = <RepoView repo={this.props.repos[this.state.selected]}/>;
        let repoSelector = <RepoSelector selectRepo={this.handleSelection} repos={this.props.repos}/>;

        return (<Content padless className="repo-wrapper" leftCol={repoSelector}>
            {repoRender}
        </Content>);
    }
}

export default RepoWrapper;