import React, { Component } from "react";
import "./stylish.css";
import Picker from "../Picker";
import PickerList from "../PickerList";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "mii"
        };
    }

    render() {
        let pickers = [
            <Picker text="Home" path="/" />,
            <Picker text="Blog" path="/blog" />,
            <Picker text="; )" path="/cheeky" />,
            <Picker text="Contact" path="/contact" />
        ];

        switch (this.props.selected) {
            case "mii":
                pickers[0] = <Picker selected text="Home" path="/" />;
                break;
            case "blog":
                pickers[1] = <Picker selected text="Blog" path="/blog" />;
                break;
            case "cheeky":
                pickers[2] = <Picker selected text="; )" path="/cheeky" />;
                break;
            case "contact":
                pickers[3] = <Picker selected text="Contact" path="/contact" />;
                break;
            default:
                break;
        }

        return (<header className="row">
            <div className="col-md-3">
                <h1>VictorIJnr</h1>
            </div>

            <div className="col-md-9">
                <PickerList pickers={pickers}/>
            </div>
        </header>);
    }
}

export default Header;