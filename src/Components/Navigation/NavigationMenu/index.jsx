import React from "react";

import { faCatSpace } from "@fortawesome/pro-duotone-svg-icons";
import { faCode, faHeart, faHouseChimneyBlank } from "@fortawesome/sharp-solid-svg-icons";

import { faCatSpace as faCatSolid } from "@fortawesome/pro-solid-svg-icons";

import LinkedIcon from "../LinkedIcon";

import "./stylish.css";

/**
 * Renders the navigation menu.
 */
function NavigationMenu(props) {
    const seeSpaceKitty = Math.random() < 0.2;
    let interestsIcon = seeSpaceKitty ? faCatSpace : faHeart;
    let selectedInterestsIcon = seeSpaceKitty ? faCatSolid : faHeart;

    return <div id="navigation-menu">
        <LinkedIcon path="/" caption="Home" icon={faHouseChimneyBlank} selectedIcon={faHouseChimneyBlank} />
        <LinkedIcon path="/projects" caption="Projects" icon={faCode} selectedIcon={faCode} />

        {/* We could change this to the paw-claws pro icon, because Sk8terTiger. */}
        <LinkedIcon path="/blog" caption="Playground" icon={interestsIcon} selectedIcon={selectedInterestsIcon} />
    </div>
}

export default NavigationMenu;