import React from "react";

import Content from "../../../Components/Content";
import SeparatorDiv from "../../../Components/Layout/SeparatorDiv";
import SeparatorSection from "../../../Components/Layout/SeparatorSection";
import HighlightImage from "../../../Components/Highlight/HighlightImage";

import waffleCo from "../../../assets/images/waffles.png";

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
                In my defence, I never asked to be paid. I also never got in touch with them...<br />
                Fantastic Streaky Back Waffles though.
            </p>
        </SeparatorSection>
        <SeparatorSection id="waffle-intro">
            <SeparatorDiv>
                <HighlightImage image={waffleCo} />
                <p>
                    So why did I bother making a website for a company, when I didn't plan on becoming a freelancer?
                </p>
            </SeparatorDiv>
        </SeparatorSection>
    </Content>
}

export default WaffleCo;