import React from "react";

import MiniPlayer from "../../../Components/MiniPlayer";

import Content from "../../../Components/Layout/Content";
import SeparatorDiv from "../../../Components/Layout/SeparatorDiv";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";

import "./stylish.css";
import "./responsive.css";

/**
 * Project page for bu.
 * We have to use UStylA, since bu is lowercase, which is a no-no for a component name :/
 */
function UStylA(props) {
    const buIntroContent = <p>
        That was the entire motivation for bu.<br />
        I wanted a more natural way to communicate with virtual assistants. Like Iron Man.<br /><br />
        I've "Okayed!" my last Google.<br /><br />
        
        Ideally, I'd have something "natural"; akin to how we speak to one another, or our friends.<br />
        The first step: make the virtual assistant feel more colloquial/familiar to the user.<br /><br />
        So, it'd help if I got to know the user a little better.
    </p>

    const buCirclesGroup = <div className="bu-circles-group">
        <div className="bu-classification-circle classifying-circle classified-left-col classified-top-row" />
        <div className="bu-classification-circle classifying-circle classified-right-col classified-top-row" />
        <div className="bu-classification-circle classifying-circle classified-left-col classified-bottom-row" />
        <div className="bu-classification-circle classifying-circle classified-right-col classified-bottom-row" />
    </div>

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
            <SeparatorDiv id="bu-intro-video-wrapper">
                <div id="bu-intro-video">
                    <div id="bu-mini-player-overlay">
                        <div id="bu-overlay-content">
                            <div>
                                <h2>J.A.R.V.I.S, and F.R.I.D.A.Y are pretty cool</h2>
                                {buIntroContent}  
                            </div>
                        </div>
                        <div id="bu-overlay-colour"/>
                    </div>
                    <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bu/history.mp4" />
                </div>
                {buIntroContent}
            </SeparatorDiv>
            <SeparatorDiv id="bu-intro-classification">
                <div id="bu-classification-overview">
                    <h2>So I decided to cluster the users</h2>
                    <p>
                        Take accents for example. An American, Brit, and an Aussie, are all disticnt.
                        <br /><br />
                        
                        The prosody of the Brit is different to the American, whilst the American's pitch will differ to the Aussie's.
                        However, add another Brit, and it's easy to say "hey, those two are both British" <s>unless one of them's from Glasgow</s>.
                        <br /><br />

                        bu works the same way.
                        <br />
                        It takes different attributes from a dataset of people (in my case, from text posts), analyses the information,
                        and then spits out groupings - called equivalence classes - of people who share similar attributes.
                    </p>
                </div>
                <div id="bu-classification-circles">
                    {buCirclesGroup}
                    {/* {buCirclesGroup} */}
                    {/* {buCirclesGroup} */}
                </div>
            </SeparatorDiv>
        </SeparatorSection>
        <SeparatorSection id="bu-outro">
            <div>
                <h2>That's as far as I got</h2>
                <p>
                    Well, besides my experiments regarding different methods to generate equivalence classes,
                    and my analysis of different machine learning models for classification.
                    <br /><br />

                    Ultimately, I wanted to use the attributes form the person's written style, and use it for some fancy user-centric natural language generation.
                    <br />
                    Going back to the lads with accents, I wanted to take the attributes that "defines" a British accent, and synthesise speech that sounded British.
                    <br /><br />

                    I might've been a little ambitious.
                </p>
            </div>
            <div>
                <p>I could go into more detail here, but, at that point, you'd be better off reading my paper.</p>
            </div>
        </SeparatorSection>
    </Content>
}

export default UStylA;