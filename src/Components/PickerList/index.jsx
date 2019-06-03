import React, { Component } from "react";
import "./stylish.css";

class PickerList extends Component {

    render() {
        let allPickers = [];
        this.props.pickers.forEach(picker => 
            allPickers.push(<li className="nav-item">{picker}</li>)
        );

        return (<nav className="navbar navbar-expand-md">
            <ul className="navbar-nav">
                {allPickers}
            </ul>
        </nav>);
    }

}

export default PickerList;