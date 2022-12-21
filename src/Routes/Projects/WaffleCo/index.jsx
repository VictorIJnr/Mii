import React from "react";

import { faPancakes } from "@fortawesome/pro-thin-svg-icons";
import LinkedIcon from "../../../Components/Navigation/LinkedIcon";

import Content from "../../../Components/Layout/Content";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";
import Highlight from "../../../Components/Highlight";
import HighlightImage from "../../../Components/Highlight/HighlightImage";

import waffleCo from "../../../assets/images/waffles.png";
import waffleCarousel from "../../../assets/images/WaffleCo/carousel.png";
import waffleGallery from "../../../assets/images/WaffleCo/gallery.png";
import waffleStory from "../../../assets/images/WaffleCo/story.png";

import "./stylish.css";
import "./responsive.css";

/**
 * The project page for the WaffleCo website.
 */
function WaffleCo(props) {
    return <Content>
        <SeparatorSection id="waffle-overview">
            <h1>St Andy's Waffle Co</h1>
            <p>
                In my defence, I never asked to be paid. I also never got in touch with them about the website...<br />
                Fantastic Streaky Back Waffles though.
                Anyway, I had fun, and learnt a lot making it. That matters more than getting paid for it. Right?
            </p>
        </SeparatorSection>
        <SeparatorSection id="waffle-intro">
            <Highlight image={waffleCo}>
                <p>
                    So, why did I bother making a website for a restaurant?<br />
                    Boredom. That and the fact that I had been learning HTML, CSS, and JS a few months prior, so I wanted to test myself,
                    and use it as an opportunity to learn about Bootstrap.
                </p>
            </Highlight>
        </SeparatorSection>
        <SeparatorSection id="waffle-outro">
            <h2>It won't bite</h2>
            <div id="waffle-outro-images">
                <HighlightImage image={waffleStory} />
                <HighlightImage image={waffleCarousel} />
                <HighlightImage image={waffleGallery} />
            </div>
            <p>
                I loved this at the time, especially the diagonal menu (who thinks of that?).<br />
                Although, it's not up to my standards of today.<br /><br />
                
                This was a chance to use Bootstrap's grids and carousels, even though I acted as though responsive design didn't exist.<br />
                If you'd like to take a look, it's on my GitHub Pages. For your sake, I hope you're not on mobile.
            </p>
            <LinkedIcon icon={faPancakes} size="3x" path="https://victorijnr.github.io/WaffleCo/" externalLink={true} />
            <p><s>I know this looks like a stack of pancakes, just pretend they're waffles.</s></p>
        </SeparatorSection>
    </Content>
}

export default WaffleCo;