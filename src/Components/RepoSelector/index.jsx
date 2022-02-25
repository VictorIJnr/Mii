import React, { useState } from "react";

import "./stylish.css";

function RepoSelector(props) {
    const [selectedRepo, setSelectedRepo] = useState(0);
    
    var setSelection = key => {
        setSelectedRepo(key);
        props.selectRepo(key);
    }

    return <ul className="repo-selector">
        {this.props.repos.map((repo, i) => 
            (<li className={selectedRepo === i ? "repo-selected" : ""} key={i}>
                <button onClick={() => setSelection(i)}>{repo.name}</button>
            </li>)
        )}
    </ul>;
}

export default RepoSelector;