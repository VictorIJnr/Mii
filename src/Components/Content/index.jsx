import React from "react";

import "./stylish.css";

function Content(props) {
    let padless = (props.padless) ? " padless" : "";

    return <div className={`content row ${(props.className) ? props.className : ""}`}>
        <div id="left-col" className={"col-md-2" + padless}>
            {props.leftCol}
        </div>

        <div className={"col-md-8" + padless}>
            {props.children}
        </div>
        
        <div className={"col-md-2" + padless} />
    </div>;
}

export default Content;