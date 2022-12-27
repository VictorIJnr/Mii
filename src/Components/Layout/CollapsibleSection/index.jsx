import React from "react";
import PropTypes from "prop-types";

import Highlight from "../../Highlight";
import SeparatorSection from "../SeparatorSection";

import "./stylish.css";
import "./responsive.css";

function CollapsibleSection(props) {
    console.log(props.headerImage)

    return <SeparatorSection className="collapsible-section">
        <div className="collapsible-header">
            <Highlight image={props.headerImage} title={props.headerTitle}>
                <p className="header-summary">{props.headerSummary}</p>
            </Highlight>
        </div>
        <div className="collapsible-content">
            {props.children}
            <Highlight title="Everbridge" image="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg" projectPath="everbridge">
                <p>My current job as a software development engineer in test.</p>
            </Highlight>
            <Highlight title={props.headerTitle} image={props.headerImage}>
                <p className="header-summary">{props.headerSummary}</p>
            </Highlight>
        </div>
    </SeparatorSection>
}

CollapsibleSection.propTypes = {
    headerImage: PropTypes.string.isRequired,
    headerSummary: PropTypes.string.isRequired,
    headerTitle: PropTypes.string.isRequired,
}

export default CollapsibleSection;