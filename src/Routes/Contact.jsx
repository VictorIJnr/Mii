import React from "react";
import Header from "../Components/Header";

import Content from "../Components/Content";

function Contact(props) {
    let hidden = {
        display: "none"
    }

    let centered = {
        "text-align": "center"
    }

    return <div className="site">
        <Header selected="contact" />
        <Content>
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
                    <i className="fab fa-github fa-4x"></i>
                </a>

                <a className="icon-link" href="mailto:victorijnr@gmail.com">
                    <i className="fas fa-at fa-4x"></i>
                </a>
            </div>
        </Content>
    </div>;
}

export default Contact;