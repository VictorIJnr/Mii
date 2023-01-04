import React from "react";

import Content from "../../../Components/Layout/Content";
import SeparatorDiv from "../../../Components/Layout/SeparatorDiv";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";
import HighlightImage from "../../../Components/Highlight/HighlightImage";
import MiniPlayer from "../../../Components/MiniPlayer";

import LinkedIcon from "../../../Components/Navigation/LinkedIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/pro-light-svg-icons";

import bloopy from "../../../assets/images/Bloopy.png";

import "./stylish.css";
import "./responsive.css";

/**
 * Project page for Bloopy.
 */
function Bloopy() {
    return <Content className="bloopy-content">
        <SeparatorSection id="bloopy-overview">
            <SeparatorDiv>
                <h1>Bloopy</h1>
                <p>
                    My first Android app.<br />
                    I created this when was 17 for my EPQ - a course where I was given free rein to create my own project, in a domain that I hadn't worked in before.
                </p>
            </SeparatorDiv>
        </SeparatorSection>
        <SeparatorSection id="bloopy-graphics">
            <SeparatorDiv id="bloopy-mascot">
                <HighlightImage image={bloopy} title="Bloopy" />
                <p>
                    I focused on making something cute, simple, yet distinctive. I was up against the likes of Crossy Road and Temple Run after all.<br />
                    Objectively speaking, my titular character, Bloopy (the little guy above), is easily the cutest mascot of the three games.
                </p>
            </SeparatorDiv>
            <SeparatorDiv id="bloopy-animations">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LLco2mpWQ-o" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
                <p>
                    The characters, animations, and music were all created from scratch. All the while, I was learning how to make a performant Android app,
                    one which ran consistently regardless of which device it was installed onto.<br /><br />
                    This lead to learning about time-based animation and interpolation to solve bugs in animations, which were initially dependent on a device's FPS.
                </p>
            </SeparatorDiv>
        </SeparatorSection>
        <SeparatorSection id="bloopy-gameplay">
            <SeparatorDiv>
                <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bloopy/gameplay-shifted.mp4" />
                <p>
                    Towards the end, this is what I had. Cute, right?<br />
                    I made something that was simple and performed well. I couldn't ask for more from my first app.
                    {/* That's even when you take into account that everything you see was done with a blank surface, a game loop, and a lot of "fun" math for pixel-based collision detection. */}
                </p>
            </SeparatorDiv>
        </SeparatorSection>
        <SeparatorSection id="bloopy-outro">
            <SeparatorDiv>
                <h2>Knock yourself out</h2>
                <p>
                    Although Bloopy is no longer on the Google Play Store, feel free to check out the mess of a codebase I wrote.
                    <br />
                    I've improved since then, promise.
                    <br /><br />
                    
                    Alternatively, I kept a blog during it's creation. I've updated the theme, but the content remains unchanged from when I was 17.
                    <br />
                    It won't bite, it's a nice way to what I was like back then. Cringe and all.
                </p>
                <div id="link-container">
                    <LinkedIcon icon={faBook} path="https://victorsepq.weebly.com" size="3x" externalLink={true} />
                    <LinkedIcon icon={faGithub} path="https://github.com/VictorIJnr/bloopy" size="3x" externalLink={true} />
                </div>
            </SeparatorDiv>
        </SeparatorSection>
    </Content>
}

export default Bloopy;