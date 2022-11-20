import React from "react";

import bloopy from "../../assets/images/Bloopy.png";
import donny from "../../assets/images/Donny.png";

import Content from "../../Components/Content";
import Highlight from "../../Components/Highlight";

import "../stylish.css";

/**
 * Renders a page showing highlights from a bunch of different projects we've worked on.
 */
function Projects(props) {
    const seeDonny = true;
    // const seeDonny = Math.random() < 0.25;

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
                The first Android app I've ever made.<br /><br />
                Flappy Bird was "problematic" a year prior to me making this, so I thought making another endless runner would be fun.
            </p>
        </Highlight>
        <Highlight title="bu" image="https://images.pexels.com/photos/11446855/pexels-photo-11446855.jpeg" projectPath="bu" reversed={true}>
            <p>
               My undergraduate dissertation. A rather straightforward clustering experiment, based on a writer's stylometry.<br /><br />
               {/* I was ambitious to begin with; I wanted to do some stylometry-influenced natural language generation, but I didn't have enough time.<br /><br /> */}
               In short, I have a SVM, Random Forest, and Neural Network that are all able to differentiate between Drake and William Shakespeare.
            </p>
        </Highlight>
        
        {/* Add a highlight for WaffleCo */}

        {seeDonny && <Highlight title="IYCASH" image={donny} projectPath="IYCASH">
            <p>
                <a href="https://www.nbcnews.com/politics/white-house/trump-referred-haiti-african-countries-shithole-nations-n836946">
                    A hackathon project to accurately determine what Donald Trump thinks of a given country.<br /><br />
                </a>
                This doesn't render all the time. So, if you're seeing this, congrats! I guess. I did warn you to be fair.
                <span style={{ "fontSize": "0.1em", verticalAlign: "top" }}><sup>Since you're here, I heard that he's a fan of Russia, and The United States of America.</sup></span>

                {/* Okay, since you actually followed the link, it looks like you've given me a chance to redeem myself. Thank you! I'll try not to waste it :D */}
            </p>
        </Highlight>}
    </Content>
}

export default Projects;