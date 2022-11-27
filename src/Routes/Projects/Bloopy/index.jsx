import React from "react";

import Content from "../../../Components/Content";
import MiniPlayer from "../../../Components/MiniPlayer";

import "./stylish.css";

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
        </section>
        <section id="bloopy-graphics">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LLco2mpWQ-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <p>
                
            </p>
        </section>        
        <MiniPlayer />
    </Content>
}

export default Bloopy;