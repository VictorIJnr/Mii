import React from "react";

import MiniPlayer from "../../../Components/MiniPlayer";

import Content from "../../../Components/Layout/Content";
import SeparatorDiv from "../../../Components/Layout/SeparatorDiv";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";

import "./stylish.css";

/**
 * Project page for bu.
 * We have to use UStylA, since bu is lowercase, which is a no-no for a component name :/
 */
function UStylA(props) {
    return <Content>
        <SeparatorSection id="bu-overview">
            <h1>bu</h1>
            <p>
                I officially called this "User Stylometry Association", but that's a mouthful.<br />
                So this is "bu", derived from the fact that I wanted to create a means of allowing virtual assistants to feel more 
                <span> b</span>espoke for <span>u</span>sers.
            </p>
        </SeparatorSection>
        <SeparatorSection id="bu-intro">
            <SeparatorDiv id="bu-history-video">
                <div id="bu-mini-player-overlay">
                    <div id="bu-overlay-colour"/>
                    <div id="bu-overlay-content">
                        <h2>So, why spend 6 months working on this?</h2>
                    </div>
                </div>
                <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bu/history.mp4" />
            </SeparatorDiv>
        </SeparatorSection>
        <div id="bu-overview">
        </div>
    </Content>
}

export default UStylA;