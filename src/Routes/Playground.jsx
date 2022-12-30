import React from "react";

import Content from "../Components/Layout/Content";
import Taste from "../Containers/Taste";

import "./stylish.css";
import "./responsive.css";

/**
 * The Playground route.
 * This page will contain anything I think is fun that I want to work on.
 * That's it. Just fun shit :D
 */
function Playground() {
    return <Content id="playground">
        <h1>Let's have some fun here</h1>
        <section id="playground-overview">
            <p>
                That's what you did at playgrounds as a kid, right? Have fun? Play in the sand? <s>Take candy from a stranger?</s> Go down a slide?
                <br />
                Same premise here. This page is for me to have a little bit of fun.
                <br /><br />
                It's also a chance to get to know me a little better. Favourite TV show, sports team, car brand, standard stuff.
            </p>
        </section>
        <Taste />
    </Content>
}

export default Playground;