import React from "react";

import LinkedInfoHandle from "../LinkedInfoHandle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faComments, faHeadphones, faLaptopCode, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import "./stylish.css";

function NavigationBar(props) {
    let interestsIcon = Math.random() < 0.5 ? faCat : faHeadphones;
     
    return <div id="nav-info-handles">
        {/* I would like to change this to be the hand-wave pro icon. */}
        <LinkedInfoHandle path="/" caption="Home" icon={faUserAlt}>
            Go back to the home page. Maybe you'll discover a secret, who knows?
        </LinkedInfoHandle>
        <LinkedInfoHandle path="/cheeky" caption="Projects" icon={faLaptopCode}>
            Fun stuff I've been working on.<br />
            Maybe there's a non-public Git repo here <FontAwesomeIcon />
        </LinkedInfoHandle>
        <LinkedInfoHandle path="/contact" caption="Contact" icon={faComments}>
            The best ways to get in touch with me!
        </LinkedInfoHandle>
        
        {/* We could change this to the paw-claws pro icon, because Sk8terTiger. */}
        <LinkedInfoHandle path="/blog" caption="Interests" icon={interestsIcon}>
            I'm a fan of music, here's what I've been listening to recently:<br />Lorde - Ribs
        </LinkedInfoHandle>
    </div>
}

export default NavigationBar;