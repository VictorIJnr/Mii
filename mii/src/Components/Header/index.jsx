import React, { Component } from "react";
import "./stylish.css";
import Picker from "../Picker";
import PickerList from "../PickerList";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let pickers = [
            <Picker text="About Me" path=""/>,
            <Picker text="Blog" path="blog"/>,
            <Picker text="; )" path="cheeky"/>,
            <Picker text="Contact" path="contact"/>
        ];

        return (
            <header className="row">
                <div className="col-md-3">
                    <h1>VictorIJnr</h1>
                </div>

                <div className="col-md-9">
                    <PickerList pickers={pickers}/>
                </div>
            </header>
        );
    }
}

export default Header;