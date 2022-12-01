import React from "react";

import Content from "../../../Components/Layout/Content";
import HighlightImage from "../../../Components/Highlight/HighlightImage";

import bloopy from "../../../assets/images/Bloopy.png";

import "./stylish.css";
import "./responsive.css";

/**
 * Project page for Bloopy.
 */
function Bloopy() {
    return <Content className="bloopy-content">
        <section id="bloopy-overview">
            <h1>Bloopy</h1>
            <p>
                My first Android app.<br />
                I created this when was 17 for my EPQ - a course where I was given free rein to create my own project, in a domain that I hadn't worked in before.
            </p>
        </section>
        <section id="bloopy-graphics">
            <div id="bloopy-mascot">
                <HighlightImage image={bloopy} title="Bloopy" />
                <p>
                    I focused on making something cute, simple, yet distinctive. I was up against the likes of Crossy Road and Temple Run after all.<br />
                    Objectively speaking, my titular character, Bloopy, is easily the cutest mascot of the three games.
                </p>
            </div>
            <div id="bloopy-animations">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LLco2mpWQ-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
                <p>
                    The characters, animations, and music were all created from scratch. All the while, I was learning how to make a performant Android app,
                    one which ran consistently regardless of which device it was installed onto.<br /><br />
                    This lead to learning about interpolation to solve bugs in animations, which were initially dependent on a device's FPS.
                </p>
            </div>
        </section>
    </Content>
}

export default Bloopy;