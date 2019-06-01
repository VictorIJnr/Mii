import React, { Component } from "react";

import RepoView from "../RepoView";

import "./stylish.css";
import Loader from "../Loader";

/**
* Wrapper for the RepoView Component.
*/
class RepoWrapper extends Component {
    render() {
        let myRepos = this.props.repos;
        let reposSplit = [];
        let repoRender = [];
        
        while (myRepos.length) reposSplit.push(myRepos.splice(0, 2));
    
        reposSplit.forEach(repos => {
            if (repos.length == 2) {
                repoRender.push(<div className="row">
                    <RepoView className="col-md-5" repo={repos[0]}/>
                    <div className="col-md-2"></div>
                    <RepoView className="col-md-5" repo={repos[1]}/>
                </div>);
            }
            else {
                repoRender.push(<div className="row">
                    <div className="col-md-3"></div>
                    <RepoView className="col-md-6" repo={repos[0]}/>
                    <div className="col-md-3"></div>
                </div>);
            }
        });

        return (<div className="repo-wrapper">
            {repoRender}
        </div>);
    }
}

export default RepoWrapper;