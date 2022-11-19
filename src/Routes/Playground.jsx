import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/pro-thin-svg-icons";

import Content from "../Components/Content";

import "./stylish.css";
import Taste from "../Containers/Taste";

/**
 * The Playground route.
 * This page will contain anything I think is fun that I want to work on.
 * That's it. Just fun shit :D
 */
function Playground() {
    return <Content>
        <h1>We have fun here <FontAwesomeIcon icon={faFaceLaughBeam}/></h1>
        <section id="playground-overview">
            <p>
                That's what you did at playgrounds as a kid, right? Have fun? Play in the sand? Go down a slide? <s>Take candy from a stranger?</s><br />
                Same premise here. This page is for me to have a little bit of fun.<br />
            </p>
        </section>
        <Taste />
    </Content>
}

export default Playground;