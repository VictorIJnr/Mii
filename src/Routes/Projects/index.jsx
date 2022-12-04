import { faUnicorn } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                These are a few personal projects that I've done over the years. Primarily, you'll see projects I completed during my education.<br />
                This is just a snapshot of the work I'm comfortable sharing for now.<br /><br />
                I can't exactly have you Zuckerberging my unicorns, can I?<br />
            </p>
            <FontAwesomeIcon icon={faUnicorn} size="2x" />
        </SeparatorSection>
        <SeparatorSection>
            <Highlight title="Everbridge" image="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg" projectPath="everbridge">
                <p>
                    My current job as a software development engineer in test.<br /><br />
                    My focus has been automating our manual test cases in C# using SpecFlow - .NET's implementation of Cucumber.<br />
                    {/* However, that doesn't stop me from dabbling as a scrum master, with manual QA, and aiding our developers whenever necessary. */}
                </p>
            </Highlight>
            <Highlight title="bu" image="https://images.pexels.com/photos/11446855/pexels-photo-11446855.jpeg" projectPath="bu" reversed={true}>
                <p>
                My undergraduate dissertation. A rather straightforward clustering experiment, based on a writer's stylometry.<br /><br />
                {/* I was ambitious to begin with; I wanted to do some stylometry-influenced natural language generation, but I didn't have enough time.<br /><br /> */}
                In short, I have a SVM, Random Forest, and Neural Network that are all able to differentiate between Drake and William Shakespeare.
                </p>
            </Highlight>
            <Highlight title="Bloopy" image={bloopy} projectPath="bloopy">
                <p>
                    The first Android app I've ever made.<br /><br />
                    Flappy Bird was "problematic" a year prior to me making this, so I thought making another endless runner would be fun.
                </p>
            </Highlight>
            <Highlight title="Waffle Co" image={waffles} projectPath="waffles" reversed={true}>
                <p>
                    A website I made for the St Andrews Waffle Company.<br /><br />
                    I took this as a chance to test out my skills, and play around with Bootstrap. Oh, and get paid an eye-watering £0.
                </p>
            </Highlight>

            {/* gource -f -a 0.25 -s 0.5 --frameless --high-dpi --hide date,progress --user-image-dir ~/.gource-avatars/ */}
        </SeparatorSection>
    </Content>
}

export default Projects;