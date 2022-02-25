import React from "react";

import "./stylish.css";

function PickerList(props) {
    let allPickers = [];
    props.pickers.forEach(picker => allPickers.push(<li className="nav-item">{picker}</li>));

    return <nav className="navbar navbar-expand-md">
        <ul className="navbar-nav">
            {allPickers}
        </ul>
    </nav>;
}

export default PickerList;