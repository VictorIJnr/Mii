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
            <SeparatorDiv id="bu-intro-video">
                <div id="bu-mini-player-overlay">
                    <div id="bu-overlay-content">
                        <div>
                            <h2>J.A.R.V.I.S, and F.R.I.D.A.Y are pretty cool IMO</h2>
                            <p>
                                That was the entire motivation for bu.<br />
                                I wanted a more natural way to communicate with virtual assistants. Like Iron Man.<br /><br />
                                I've "Okayed!" my last Google.<br /><br />
                                
                                Ideally, I'd have something "natural"; akin to how we speak to one another, or our friends.<br />
                                The first step: make the virtual assistant feel more colloquial/familiar to the user.<br /><br />
                                So, it'd help if I got to know the user a little better.
                            </p>    
                        </div>
                    </div>
                    <div id="bu-overlay-colour"/>
                </div>
                <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bu/history.mp4" />
            </SeparatorDiv>
            <SeparatorDiv id="bu-intro-classification">
                <div id="bu-classification-overview">
                    <h2>This had now become a classification task</h2>
                    <p>
                        Which gave me an opportunity to play with Keras.<br />
                    </p>
                </div>
                <div id="bu-classification-circles">
                    <div id="bu-circles-top-row" className="bu-circle-row">
                        <div className="bu-classification-circle" />
                        <div className="bu-classification-circle" />
                    </div>
                    <div id="bu-circles-middle-row" className="bu-circle-row">
                        <div className="bu-classification-circle" />
                        <div className="bu-classification-circle" />
                        <div className="bu-classification-circle" />
                    </div>
                    <div id="bu-circles-bottom-row" className="bu-circle-row">
                        <div className="bu-classification-circle" />
                        <div className="bu-classification-circle" />
                    </div>
                </div>
            </SeparatorDiv>
        </SeparatorSection>
        <div id="bu-overview">
        </div>
    </Content>
}

export default UStylA;