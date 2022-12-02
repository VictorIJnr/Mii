import React from "react";

import Content from "../../../Components/Layout/Content";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";
import Highlight from "../../../Components/Highlight";
import HighlightImage from "../../../Components/Highlight/HighlightImage";

import waffleCo from "../../../assets/images/waffles.png";
import waffleCarousel from "../../../assets/images/WaffleCo/carousel.png";
import waffleGallery from "../../../assets/images/WaffleCo/gallery.png";

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
                    Boredom. That and the fact that I had been learning HTML, CSS, and JS a few months prior, so I wanted to test myself.<br /><br />
                    Plus, I had fun, and learnt a lot about Bootstrap whilst making it. That matters more than getting paid for it. Right?
                </p>
            </Highlight>
        </SeparatorSection>
        <SeparatorSection id="waffle-outro">
            <div id="waffle-outro-images">
                <HighlightImage image={waffleCarousel} />
                <HighlightImage image={waffleGallery} />
            </div>
            <p>
                I loved this at the time, especially the diagonal menu. Seriously, who thinks of that?<br />
                {/* I've since learned to get over my stubborness towards responsive design, which I ignored in this project, in order to improve my .<br /> */}
                It was also a great chance to use Bootstrap, especially it's grids and carousels, even though I'm not using Bootstrap in this iteration of my personal webiste.
            </p>
        </SeparatorSection>
    </Content>
}

export default WaffleCo;