import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCaretDown } from "@fortawesome/pro-thin-svg-icons";

import Highlight from "../../Highlight";
import SeparatorSection from "../SeparatorSection";

import "./stylish.css";
import "./responsive.css";

/* Layout component to allow for a SeparatorSection to be expanded, and minimised at will. */
function CollapsibleSection(props) {
    const [isExpanded, setExpanded] = useState(props.expanded);

    const collapseIconClasses = classNames("collapse-icon", {
        "expanded-icon": isExpanded
    });

    return <SeparatorSection className="collapsible-section">
        <div className="collapsible-header">
            <Highlight image={props.headerImage} title={props.headerTitle}>
                <p className="header-summary">{props.headerSummary}</p>
            </Highlight>
            <FontAwesomeIcon className={collapseIconClasses} icon={faCircleCaretDown} size="3x" onClick={() => setExpanded(!isExpanded)} />
        </div>
        <div className="collapsible-content">
            {props.children}
        </div>
    </SeparatorSection>
}

CollapsibleSection.propTypes = {
    headerImage: PropTypes.string.isRequired,
    headerSummary: PropTypes.string.isRequired,
    headerTitle: PropTypes.string.isRequired,

    //? Whether the section is expanded.
    //? Should only be used for the initial state. The expansion logic for the sectionis handled internally in the component.
    expanded: PropTypes.bool
}

CollapsibleSection.defaultProps = {
    expanded: false
}

export default CollapsibleSection;