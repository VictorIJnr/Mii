import React from "react";

import bloopy from "../assets/images/Bloopy.png";

import Content from "../Components/Content";
import Highlight from "../Components/Highlight";

import "./stylish.css";

/**
 * Renders a page showing highlights from a bunch of different projects we've worked on.
 */
function Projects(props) {
    return <Content>
        <section id="projects-overview">
            <h1>Some Stuff I've Worked On</h1>
            <p>
                <span>
                    This is primarily a few personal projects that I've either done as a part of my education, or for fun.<br />
                    Let me emphasise <b><i>for fun</i></b>. Okay? Well learning was also a part of it too in most cases.<br />
                    But you <i>may</i> see a hackathon project which is in no way an expression of my views.<br /><br />
                    
                    <span>
                        That should be enough of a warning, but don't worry, it's mostly vanilla work.<br />
                        :D
                    </span>
                </span>
            </p>
        </section>
        <Highlight title="Bloopy" image={bloopy} projectPath="bloopy">
            <p>
                This is the first Android app I've ever made.<br /><br />
                Created when I was 17, I made this as a part of my EPQ - a course where I was given free rein to create my own project, in a domain that I hadn't worked in before.
            </p>
        </Highlight>
        <Highlight title="bu" image="https://images.pexels.com/photos/11446855/pexels-photo-11446855.jpeg" projectPath="bu" reversed={true}>
            <p>
               My undergraduate dissertation.
            </p>
        </Highlight>
        <Highlight title="bu" image="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg" projectPath="bu">
            <p>
               My undergraduate dissertation.
            </p>
        </Highlight>
    </Content>
}

export default Projects;