import React, { Component } from "react";
import "../stylish.css";

class Overlay extends Component {

    render() {
        console.log(this);
        let headerText, overlayText;
        this.props.children.forEach(child => {
            if(child.type === "p") overlayText = child.props.children;
            else if(child.type === "h2") headerText = child.props.children;
        });

        return (<div className="slide-overlay">
            <h2>{headerText}</h2>
            <p>
                {overlayText}
            </p>

            <a href={this.props.github}>
                <i className="fab fa-github fa-2x"></i>
            </a>
            {this.props.website && 
                <a href={this.props.website}>
                    <i className="fas fa-globe fa-2x"></i>
                </a>
            }
        </div>);
    }

}

export default Overlay;