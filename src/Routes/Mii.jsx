import React from "react";

import Content from "../Components/Content";

import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/pro-solid-svg-icons";
import LinkedIcon from "../Components/Navigation/LinkedIcon";

import "./stylish.css";
import "../animations.css"

/**
 * Component describing the "Mii" page.
 * I'm using this as our splash page, the first one you see and with
 * tidbits of information for different sections on the website.
 */
function Mii(props) {
    let isBeingFriendly = Math.random() < 0.25;

    let greeting = isBeingFriendly
        ? <h1 className="fade-in"><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">Hello friend!</a></h1>
        : <h1 className="fade-in">Hi!</h1>

    return <Content noRightGutter={true}>
        <p className="mii-hidden">
            I've hidden a couple "easter eggs" here and there; small stuff, like
            some of my favourite TV shows, video games, youtube channels, and the like.
            There's already been a rather subtle one out in the open. But enough about
            Mario Kart, I won't keep you any longer. After all, you came here to get to 
            know me. Right?
        </p>
        <div id="friendly">
            <div id="greeting">
                {/* Add state to make sure we don't animate after having already loaded the home page. */}
                {/* {greeting} */}
                <h1 className="fade-in">Lorem ipsum.</h1>
                {/* <h2 className="fade-in delay">I'm Victor,</h2> */}
                <h2 className="fade-in delay">Dolor sit amet.</h2>
                {/* <h3 className="fade-in long-delay">a software engineer in test at Everbridge. Welcome to my website!</h3> */}
                <h3 className="fade-in long-delay">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h3>
                <div id="mii-contact-links" className="fade-in long-delay">
                    <LinkedIcon icon={faGithub} size="3x" path="https://github.com/VictorIJnr" externalLink={true} />
                    <LinkedIcon icon={faEnvelopeSquare} size="3x" path="mailto:victorijnr@gmail.com" externalLink={true} />
                    <LinkedIcon icon={faLinkedinIn} size="3x" path="https://www.linkedin.com/in/victorijnr/" externalLink={true} />
                </div>
            </div>
        </div>
    </Content>
}

export default Mii;