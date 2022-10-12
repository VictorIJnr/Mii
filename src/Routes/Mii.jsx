import React from "react";

import Content from "../Components/Content";

import "./stylish.css";

/**
 * Component describing the "Mii" page.
 * I'm using this as our splash page, the first one you see and with
 * tidbits of information for different sections on the website.
 */
function Mii(props) {
    let isBeingFriendly = Math.random() < 0.25

    let greeting = isBeingFriendly
        ? <h1><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">Hello friend!</a></h1>
        : <h1>Hi!</h1>

    return <Content>
        <div id="friendly">
            <div id="greeting">
                {greeting}
                <h2>I'm Victor,</h2>
                <h3>a software engineer in test at Everbridge. Welcome to my website!</h3>
            </div>
            <p className="hidden" style={{height: "2vh"}}>
            I've hidden a couple "easter eggs" here and there; small stuff, like
            some of my favourite TV shows, video games, youtube channels, and the like.
            There's already been a rather subtle one out in the open. But enough about
            Mario Kart, I won't keep you any longer. After all, you came here to get to 
            know me. Right?
            </p>
        </div>
    </Content>
}

export default Mii;