import React, { Component } from "react";
import "../stylish.css";

import Overlay from "../Overlay";

class Slide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    mouseHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    mouseEnter = () => {
        this.setState({
            hover: true
        });
        console.log("Hi");
    }

    mouseLeave = () => {
        this.setState({
            hover: false
        });

        console.log("Bye");
    }

    render() {
        let headerText, overlayText, slideContent;
        this.props.children.forEach(child => {
            if (child.type === "p") overlayText = child.props.children;
            if (child.type === "h2") headerText = child.props.children;
            else slideContent = child;
        });

        return (
        <div className="my-slide" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <Overlay className={this.state.hover ? "" : " hidden"}
            github={this.props.github} website={this.props.website}>
                <h2>{headerText}</h2>
                <p>{overlayText}</p>
            </Overlay>
            {slideContent}
        </div>);
    }

}

export default Slide;