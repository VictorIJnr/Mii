import React from "react";

import MiniPlayer from "../../../Components/MiniPlayer";

import Content from "../../../Components/Layout/Content";

import "./stylish.css";

/**
 * Project page for bu.
 * We have to use UStylA, since bu is lowercase, which is a no-no for a component name :/
 */
function UStylA(props) {
    return <Content>
        <div id="bu-overview">
            {/* <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bu/history.mp4" /> */}
            <MiniPlayer src="https://d1cuiew8u1gk5n.cloudfront.net/bloopy/gameplay.mp4" />
        </div>
    </Content>
}

export default UStylA;