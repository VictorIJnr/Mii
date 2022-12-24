import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-thin-svg-icons";

import "./stylish.css";

/**
* Just displays a spinny boi.
* Solely used when data is currently being loaded.
*/
function Loader() {
    return <div className="loader">
        <FontAwesomeIcon icon={faSpinnerThird} size="3x" />
    </div>;
}

export default Loader;