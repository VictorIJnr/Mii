import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import axios from "axios";

import Content from "../Components/Content";
import Loader from "../Components/Loader";

import { myToken } from "../config/tokens.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/pro-thin-svg-icons";

function Playground() {

    return <Content>
        <h1>We have fun here <FontAwesomeIcon icon={faFaceLaughBeam}/></h1>
        <div>
            <p>
                That's what you did at playgrounds as a kid, right? Have fun? Play in the sand? Go down a slide? <s>Take candy from a stranger?</s><br />
                Same premise here. This page is for me to have a little bit of fun.<br />
            </p>
        </div>
    </Content>
}

export default Playground;