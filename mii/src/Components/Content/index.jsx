import React, { Component } from "react";
import "./stylish.css";

class Content extends Component {

    render() {
        return (<div className="content row">
            <div className="col-md-2">
            </div>

            <div className="col-md-8">
                {this.props.children}
            </div>
            
            <div className="col-md-2">
            </div>
        </div>);
    }

}

export default Content;