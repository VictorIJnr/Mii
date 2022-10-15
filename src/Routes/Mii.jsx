import React from "react";

import Content from "../Components/Content";

import "../animations.css"
import "./stylish.css";
import InfoBubble from "../Components/InfoBubble";

/**
 * Component describing the "Mii" page.
 * I'm using this as our splash page, the first one you see and with
 * tidbits of information for different sections on the website.
 */
function Mii(props) {
    let isBeingFriendly = Math.random() < 0.25

    let greeting = isBeingFriendly
        ? <h1 className="fade-in"><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">Hello friend!</a></h1>
        : <h1 className="fade-in">Hi!</h1>

    return <Content>
        <div id="friendly">
            <div id="greeting">
                {/* {greeting} */}
                <h1 className="fade-in">Lorem ipsum.</h1>
                {/* <h2 className="fade-in delay">I'm Victor,</h2> */}
                <h2 className="fade-in delay">Dolor sit amet.</h2>
                {/* <h3 className="fade-in long-delay">a software engineer in test at Everbridge. Welcome to my website!</h3> */}
                <h3 className="fade-in long-delay">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h3>
            </div>
            <p className="hidden" style={{height: "2vh"}}>
            I've hidden a couple "easter eggs" here and there; small stuff, like
            some of my favourite TV shows, video games, youtube channels, and the like.
            There's already been a rather subtle one out in the open. But enough about
            Mario Kart, I won't keep you any longer. After all, you came here to get to 
            know me. Right?
            </p>
        </div>
        <div id="mii-info-bubbles" className="load-post-greeting">
            <InfoBubble infoTitle="About Me">
            </InfoBubble>
            <InfoBubble infoTitle="Projects">
            </InfoBubble>
            <InfoBubble infoTitle="Contact">
            </InfoBubble>
            <InfoBubble infoTitle="Interests">
                <p>I'm a fan of music, here's what I've been listening to recently:<br />Lorde - Ribs</p>
            </InfoBubble>
        </div>
    </Content>
}

export default Mii;