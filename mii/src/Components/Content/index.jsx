import React, { Component } from "react";
import "./stylish.css";

class Content extends Component {

    render() {
        let padless = (this.props.padless) ? " padless" : "";

        return (<div className={`content row ${(this.props.className) ? this.props.className : ""}`}>
            <div className={"col-md-2" + padless}>
                {this.props.leftCol}
            </div>

            <div className={"col-md-8" + padless}>
                {this.props.children}
            </div>
            
            <div className={"col-md-2" + padless}>
            </div>
        </div>);
    }

}

export default Content;