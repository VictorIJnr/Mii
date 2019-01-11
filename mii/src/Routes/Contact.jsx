import React, { Component } from "react";
import Header from "../Components/Header";

import Content from "../Components/Content";

class Contact extends Component {

    render() {
        let hidden = {
            display: "none"
        }

        let centered = {
            "text-align": "center"
        }

        return (<div className="site">
            <Header selected="contact" />
            <Content>
                <h1>Hello There!</h1>
                <p id="kenobi" style={hidden}>General Kenobi!</p>
                <p>
                    It crossed my mind that some people that'll look at this may want to speak to me.
                    Fine. I'm currently debating whether I should have a form here, you know, since
                    emails are a thing. But so are DOS attacks, and I'm <em>clearly</em> a 
                    worthwhile target. So for now, you've got a GitHub link as well as a mailto.
                    <br/><br/>
                    <i>You're Welcome.</i> 
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
        </div>);
    }

}

export default Contact;