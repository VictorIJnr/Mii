import React from "react";

import Content from "../Components/Content";

import "./stylish.css";

function Projects(props) {
    return <Content>
        <div id="projects-overview">
            <h1>Some Stuff I've Worked On</h1>
            <p>
                This is primarily a few personal projects that I've either done as a part of my education, or for fun.<br />
                Let me emphasise <b><i>for fun</i></b>. Okay? Well learning was also a part of it too in most cases.<br />
                But you <i>may</i> see something which was done for fun and is in no way an expression of my views.<br /><br />
                That should be enough of a warning, but don't worry, it's mostly vanilla work.<br /> :D
            </p>
        </div>
    </Content>
}

export default Projects;