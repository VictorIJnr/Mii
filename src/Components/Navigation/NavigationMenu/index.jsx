import React from "react";
import NavigationBar from "../NavigationBar";

import "./stylish.css";

/**
 * Renders the navigation menu.
 */
function NavigationMenu(props) {
    return <div id="navigation-menu-overlay">
        <div id="navigation-menu">
            <NavigationBar />
        </div>
    </div>
}

export default NavigationMenu;