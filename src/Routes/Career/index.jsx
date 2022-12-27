import React from "react";

import Content from "../../Components/Layout/Content";
import CollapsibleSection from "../../Components/Layout/CollapsibleSection";

import "./stylish.css";
import "./responsive.css";

/**
 * Route depicting my career so far.
 */
function Career() {
    return <Content>
        <CollapsibleSection headerTitle="Everbridge" headerSummary="My current job as a software development engineer in test."
            headerImage="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg">

        </CollapsibleSection>
    </Content>
}

export default Career;