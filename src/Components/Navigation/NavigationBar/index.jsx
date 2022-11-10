import React from "react";

import { faCatSpace, faCode, faHouseChimneyBlank } from "@fortawesome/pro-duotone-svg-icons";
import { faHeart } from "@fortawesome/sharp-solid-svg-icons";

import {
    faCatSpace as faCatSolid,
    faCode as faCodeSolid,
    faHouseChimneyBlank as faHouseSolid
} from "@fortawesome/pro-solid-svg-icons";

import LinkedInfoHandle from "../../InfoHandles/LinkedInfoHandle";

import "./stylish.css";

/**
 * Displays navigation options to different parts of the website.
 */
function NavigationBar(props) {
    const seeSpaceKitty = Math.random() < 0.2;
    let interestsIcon = seeSpaceKitty ? faCatSpace : faHeart;
    let selectedInterestsIcon = seeSpaceKitty ? faCatSolid : faHeart;

    return <div id="nav-info-handles">
        {/* I would like to change this to be the hand-wave pro icon. */}
        <LinkedInfoHandle path="/" caption="Home" icon={faHouseChimneyBlank} selectedIcon={faHouseSolid}>
            Maybe you'll discover a secret here, who knows?
        </LinkedInfoHandle>
        <LinkedInfoHandle path="/cheeky" caption="Projects" icon={faCode} selectedIcon={faCodeSolid}>
            Maybe there's a private Git repo here too!
        </LinkedInfoHandle>
        
        {/* We could change this to the paw-claws pro icon, because Sk8terTiger. */}
        <LinkedInfoHandle path="/blog" caption="Interests" icon={interestsIcon} selectedIcon={selectedInterestsIcon}>
            I can't get Lorde - Ribs out of my head!
        </LinkedInfoHandle>
    </div>
}

export default NavigationBar;