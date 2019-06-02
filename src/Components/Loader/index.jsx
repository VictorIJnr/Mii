import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";

/**
* Just displays a spinny boi.
* Solely used when data is currently being loaded.
*/
class Loader extends Component {
    render() {
        return (<div className="loadDiv">
            <FontAwesomeIcon icon={faSpinner} size="3x" pulse/>
        </div>);
    }
}

export default Loader;