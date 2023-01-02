import React from "react";

import Content from "../../Components/Layout/Content";
import CollapsibleSection from "../../Components/Layout/CollapsibleSection";
import SeparatorDiv from "../../Components/Layout/SeparatorDiv";

import "./stylish.css";
import "./responsive.css";
import SeparatorSection from "../../Components/Layout/SeparatorSection";
import TextLink from "../../Components/Navigation/TextLink";

/**
 * Route depicting my career so far.
 */
function Career() {
    const everbridgeSummary = <p>
        My current job as a software development engineer in test.
        <br />
        2019 - Present
    </p>

    return <Content>
        <SeparatorSection id="career-intro">
            <SeparatorDiv>
                <h1>My Career</h1>
                <p>
                    I'm working on the foundations of an emerging career, that started after graduating from The University of St. Andrews in 2019.
                </p>
            </SeparatorDiv>
        </SeparatorSection>
        <CollapsibleSection expanded={true} headerTitle="Everbridge" headerSummaryComponent={everbridgeSummary}
            headerImage="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg">
                <SeparatorDiv>
                    <h2>Description</h2>
                    <p>
                        Working as a part of the <TextLink text="Control Center" url="https://www.everbridge.com/products/control-center/" /> team, 
                        I'm automating our testing processes to help deliver product iterations faster, without comprimising on quality.
                        <br />
                        I have also dabbled as a scrum master, assisted with manual testing, and lent a hand implementing product features 
                        whenever necessary.
                    </p>
                </SeparatorDiv>
                <SeparatorDiv>
                    <h2>Responsibilities</h2>
                </SeparatorDiv>
        </CollapsibleSection>
    </Content>
}

export default Career;