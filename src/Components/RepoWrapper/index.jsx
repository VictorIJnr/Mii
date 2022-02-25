import React, { useState } from "react";

import RepoView from "../RepoView";

import Content from "../Content";
import RepoSelector from "../RepoSelector";

import "./stylish.css";

/**
* Wrapper for the RepoView Component.
*/
function RepoWrapper(props) {
    const [selectedRepo, setSelectedRepo] = useState(0);

    let repoRender = <RepoView repo={props.repos[selectedRepo]}/>;
    let repoSelector = <RepoSelector selectRepo={index => setSelectedRepo(index)} repos={props.repos}/>;

    return <Content padless className="repo-wrapper" leftCol={repoSelector}>
        {repoRender}
    </Content>;
}

export default RepoWrapper;