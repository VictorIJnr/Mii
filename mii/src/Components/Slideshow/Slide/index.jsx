import React, { Component } from "react";
import "../stylish.css";

import Overlay from "../Overlay";

class Slide extends Component {

    render() {
        console.log(this);

        let headerText, overlayText, slideContent;
        this.props.children.forEach(child => {
            if (child.type == "p") overlayText = child.props.children;
            if (child.type == "h2") headerText = child.props.children;
            else slideContent = child;
        });

        return(<div className="my-slide">
            <Overlay github={this.props.github} website={this.props.website}>
                <h2>{headerText}</h2>
                <p>{overlayText}</p>
            </Overlay>
            {slideContent}
        </div>);
    }

}

export default Slide;