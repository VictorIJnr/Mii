import { faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopes } from "@fortawesome/sharp-solid-svg-icons";
import React from "react";

import Content from "../Components/Content";

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

        <div style={centered}>
            <a className="icon-link" href="https://github.com/VictorIJnr">
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>

            <a className="icon-link" href="mailto:victorijnr@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
            </a>

            <a className="icon-link" href="mailto:victorijnr@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
            </a>
        </div>
    </Content>
}

export default Contact;