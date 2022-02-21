import React from "react";

import Picker from "../Picker";
import PickerList from "../PickerList";

import "./stylish.css";

/**
 * Component for the header at the top of the page.
 */
function Header(props) {
    let pickers = [
        <Picker text="Home" path="/" />,
        <Picker text="Blog" path="/blog" />,
        <Picker text="; )" path="/cheeky" />,
        <Picker text="Contact" path="/contact" />
    ];

    switch (props.selected) {
        case "mii":
            pickers[0] = <Picker selected={true} text="Home" path="/" />;
            break;
        case "blog":
            pickers[1] = <Picker selected={true} text="Blog" path="/blog" />;
            break;
        case "cheeky":
            pickers[2] = <Picker selected={true} text="; )" path="/cheeky" />;
            break;
        case "contact":
            pickers[3] = <Picker selected={true} text="Contact" path="/contact" />;
            break;
        default:
            break;
    }

    return <header className="row">
        <div className="col-md-3">
            <h1>VictorIJnr</h1>
        </div>

        <div className="col-md-9">
            <PickerList pickers={pickers}/>
        </div>
    </header>;
}

export default Header;