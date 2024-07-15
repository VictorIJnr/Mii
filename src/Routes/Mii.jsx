import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/sharp-solid-svg-icons";

import Content from "../Components/Layout/Content";
import LinkedIcon from "../Components/Navigation/LinkedIcon";

import "./stylish.css";
import "./responsive.css";
import "../animations.css";

/**
 * Component describing the "Mii" page.
 * I'm using this as our splash page, the first one you see and with
 * tidbits of information for different sections on the website.
 */
function Mii(props) {
    const isBeingFriendly = Math.random() < 0.1;
    const greeting = isBeingFriendly
        ? <h1 className="fade-in hello-glow"><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">Hello friend!</a></h1>
        : <h1 className="fade-in">Hi!</h1>

    return <Content>
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
                {greeting}
                <h2 className="fade-in delay">I'm Victor, a Senior Software Engineer in Test at Everbridge.</h2>
                <h3 className="fade-in long-delay">Welcome to my website! Check out some stuff I've worked on, or just get in touch!</h3>
                <div id="mii-contact-links" className="fade-in long-delay">
                    <LinkedIcon icon={faGithub} size="3x" path="https://github.com/VictorIJnr" externalLink={true} />
                    <LinkedIcon icon={faEnvelopeSquare} size="3x" path="mailto:victorijnr@gmail.com" externalLink={true} />
                    <LinkedIcon icon={faLinkedin} size="3x" path="https://www.linkedin.com/in/victorijnr/" externalLink={true} />
                </div>
            </div>
        </div>
    </Content>
}

export default Mii;