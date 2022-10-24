import React from "react";

import Content from "../Components/Content";
import InfoHandle from "../Components/InfoHandle";
import LinkedInfoHandle from "../Components/LinkedInfoHandle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faComments, faHeadphones, faLaptopCode, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import "../animations.css"
import "./stylish.css";

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

    let interestsIcon = Math.random() < 0.5 ? faCat : faHeadphones;

    return <Content noRightGutter={true}>
        <div id="friendly">
            <div id="greeting">
                {/* Add state to make sure we don't animate after having already loaded the home page. */}
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
        {/* <div id="mii-info-handles" className="load-post-greeting"> */}
        <div id="mii-info-handles">
            {/* I would like to change this to be the hand-wave pro icon. */}
            <LinkedInfoHandle caption="Home" icon={faUserAlt}>
            </LinkedInfoHandle>
            <LinkedInfoHandle path="/cheeky" caption="Projects" icon={faLaptopCode}>
                Fun stuff I've been working on.<br />
                Maybe there's a non-public Git repo here <FontAwesomeIcon />
            </LinkedInfoHandle>
            <LinkedInfoHandle path="/contact" caption="Contact" icon={faComments}>
                The best ways to get in touch with me!
            </LinkedInfoHandle>
            
            {/* We could change this to the paw-claws pro icon, because Sk8terTiger. */}
            <LinkedInfoHandle path="/blog" caption="Interests" icon={interestsIcon}>
                I'm a fan of music, here's what I've been listening to recently:<br />Lorde - Ribs
            </LinkedInfoHandle>
        </div>
    </Content>
}

export default Mii;