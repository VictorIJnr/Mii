import React from "react";

import Content from "../../../Components/Content";
import MiniPlayer from "../../../Components/MiniPlayer";

import bu from "../../../assets/videos/bu-1080.mp4";

import "./stylish.css";
import LanguageWrapper from "../../../Components/LanguageWrapper";

/**
 * Project page for Bloopy.
 */
function Bloopy() {
    return <Content>
        <section id="bloopy-overview">
            <h1>Bloopy</h1>
            <p>
                My first Android app.<br />
                I created this when was 17 for my EPQ - a course where I was given free rein to create my own project, in a domain that I hadn't worked in before.<br /><br />
            </p>
            <LanguageWrapper languages={["Java"]} />
        </section>
        {/* <MiniPlayer /> */}
    </Content>
}

export default Bloopy;