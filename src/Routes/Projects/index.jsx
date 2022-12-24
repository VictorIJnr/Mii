import React from "react";

import bloopy from "../../assets/images/Bloopy.png";
import waffles from "../../assets/images/waffles.png";

import Highlight from "../../Components/Highlight";
import Content from "../../Components/Layout/Content";
import SeparatorSection from "../../Components/Layout/SeparatorSection";

import "../stylish.css";

/**
 * Renders a page showing highlights from a bunch of different projects we've worked on.
 */
function Projects(props) {
    return <Content>
        <SeparatorSection id="projects-overview">
            <h1>Some Stuff I've Worked On</h1>
            <p>
                These are a few personal projects that I've done over the years.
                <br />
                I'm constantly playing around with anything I find interesting, and I've recently began learning Kotlin so I can do make something cool using NFC.
                <br /><br />
                But, some projects in progress will remain private, for now. I don't want to accidentally Zuckerberg myself.<br />
            </p>
        </SeparatorSection>
        <SeparatorSection id="projects-highlights">
            <Highlight title="bu" image="https://d1cuiew8u1gk5n.cloudfront.net/bu/highlight-images/blocks.jpeg" projectPath="bu">
                <p>
                    <b>My undergraduate dissertation: a clustering experiment, based on a writer's stylometry.</b><br /><br />
                    In short, I have a SVM, Random Forest, and Neural Network that are all able to differentiate between Drake and William Shakespeare.
                </p>
            </Highlight>
            <Highlight title="Bloopy" image={bloopy} projectPath="bloopy" reversed={true}>
                <p>
                    <b>The first Android app I ever made.</b><br /><br />
                    Flappy Bird was "problematic" a year prior to me making this, so I thought making another endless runner would be fun.
                </p>
            </Highlight>
            <Highlight title="Waffle Co" image={waffles} projectPath="waffles">
                <p>
                    <b>A website I made for the St Andrews Waffle Company.</b><br /><br />
                    I took this as a chance to test out my skills, and play around with Bootstrap. Oh, and get paid an eye-watering £0.
                </p>
            </Highlight>

            {/* gource -f -a 0.25 -s 0.5 --frameless --high-dpi --hide date,progress --user-image-dir ~/.gource-avatars/ */}
        </SeparatorSection>
    </Content>
}

export default Projects;