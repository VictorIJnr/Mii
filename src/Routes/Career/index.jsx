import React from "react";

import Content from "../../Components/Layout/Content";
import CollapsibleSection from "../../Components/Layout/CollapsibleSection";
import SeparatorDiv from "../../Components/Layout/SeparatorDiv";

import "./stylish.css";
import "./responsive.css";

/**
 * Route depicting my career so far.
 */
function Career() {
    return <Content>
        <CollapsibleSection expanded={true} headerTitle="Everbridge" headerSummary="My current job as a software development engineer in test."
            headerImage="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg">
                <SeparatorDiv>
                    <h3>Responsibilities</h3>
                    <p>
                        My focus has been automating our manual test cases in C# using SpecFlow - .NET's implementation of Cucumber.<br />
                        However, that doesn't stop me from dabbling as a scrum master, with manual QA, and aiding our developers whenever necessary.
                    </p>
                </SeparatorDiv>
        </CollapsibleSection>
    </Content>
}

export default Career;