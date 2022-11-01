import React from "react";

import LinkedInfoHandle from "../LinkedInfoHandle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCatSpace, faCode, faComments, faHeadphones, faHouseChimneyBlank } from "@fortawesome/pro-duotone-svg-icons";
import { faHeart } from "@fortawesome/sharp-solid-svg-icons";

import {
    faCatSpace as faCatSolid,
    faCode as faCodeSolid,
    faComments as faCommentsSolid,
    faHouseChimneyBlank as faHouseSolid
} from "@fortawesome/pro-solid-svg-icons";

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
            Go back to the home page. Maybe you'll discover a secret, who knows?
        </LinkedInfoHandle>
        <LinkedInfoHandle path="/cheeky" caption="Projects" icon={faCode} selectedIcon={faCodeSolid}>
            Fun stuff I've been working on.<br />
            Maybe there's a non-public Git repo here too!<FontAwesomeIcon />
        </LinkedInfoHandle>
        <LinkedInfoHandle path="/contact" caption="Contact" icon={faComments} selectedIcon={faCommentsSolid}>
            The best ways to get in touch with me!
        </LinkedInfoHandle>
        
        {/* We could change this to the paw-claws pro icon, because Sk8terTiger. */}
        <LinkedInfoHandle path="/blog" caption="Interests" icon={interestsIcon} selectedIcon={selectedInterestsIcon}>
            I'm a fan of music, here's what I've been listening to recently:<br />Lorde - Ribs
        </LinkedInfoHandle>
    </div>
}

export default NavigationBar;