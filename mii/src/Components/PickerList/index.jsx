import React, { Component } from "react";
import "./stylish.css";

class PickerList extends Component {

    render() {
        let allPickers = [];
        this.props.pickers.forEach(picker => {
            switch (picker.props.path) {
                case "":
                    break; 
                case "blog":
                    break; 
                case "cheeky":
                    break; 
                case "contact":
                    break; 
            }

            allPickers.push(<li className="nav-item">{picker}</li>);
        });

        return (<nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav">
                {allPickers}
            </ul>
        </nav>);
    }

}

export default PickerList;