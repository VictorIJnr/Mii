import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content from "../Components/Content";

import "./stylish.css";
import LinkedIcon from "../Components/Navigation/LinkedIcon";

/**
 * The "Contact" page.
 * I don't really need to describe this, but, we'll dump a few links here for people to reach out.
 */
function Contact(props) {
    let hidden = {
        display: "none"
    }

    let centered = {
        "text-align": "center"
    }

    return <Content>
        <h1>Hello There!</h1>
        <p id="kenobi" style={hidden}>General Kenobi!</p>
        <p>
            It crossed my mind that some people that'll look at this may want to speak to me.
            It'd probably help if I give you some way to reach me, right? When I first made 
            this website, I was debating whether I should have a form here, you know, since 
            emails are a thing. But so are RUDY attacks, and I'm <em>clearly</em> a worthwhile 
            target<span style={hidden}>Evil Corp who?</span>. In the end, I've given 
            you a mailto. But if you're <b><i>really</i></b> cool, check out my GitHub.
            <br/><br/>
            I know. I know. How kind of me, right? :D
        </p>

        <div id="contact-external-links" style={centered}>
            <LinkedIcon icon={faGithub} size="3x" path="https://github.com/VictorIJnr" externalLink={true} />
            <LinkedIcon icon={faEnvelopeSquare} size="3x" path="mailto:victorijnr@gmail.com" externalLink={true} />
        </div>
    </Content>
}

export default Contact;