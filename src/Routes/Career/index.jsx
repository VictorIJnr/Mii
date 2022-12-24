import React from "react";

import Content from "../../Components/Layout/Content";

import Highlight from "../../Components/Highlight";
import SeparatorSection from "../../Components/Layout/SeparatorSection";

/**
 * Route depicting my career so far.
 */
function Career() {
    return <Content>
        <SeparatorSection>
            <Highlight title="Everbridge" image="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg" projectPath="everbridge">
                <p>
                    <b>My current job as a software development engineer in test.</b><br /><br />
                    My focus has been automating our manual test cases in C# using SpecFlow - .NET's implementation of Cucumber.<br />
                    {/* However, that doesn't stop me from dabbling as a scrum master, with manual QA, and aiding our developers whenever necessary. */}
                </p>
            </Highlight>
        </SeparatorSection>
    </Content>
}

export default Career;