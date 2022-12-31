import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCaretDown } from "@fortawesome/pro-thin-svg-icons";

import HighlightImage from "../../Highlight/HighlightImage";
import SeparatorSection from "../SeparatorSection";

import "./stylish.css";
import "./responsive.css";

/* Layout component to allow for a SeparatorSection to be expanded, and minimised at will. */
function CollapsibleSection(props) {
    const [isExpanded, setExpanded] = useState(props.expanded);

    function createCollapseIcon(isOverlay) {
        const collapseIconClasses = classNames("collapse-icon", {
            "expanded-icon": isExpanded,
            "highlight-card-arrow": isOverlay
        });

        //? I know Sonarlint is mad. But:
        //? https://www.reddit.com/r/reactnative/comments/u2fgfb/comment/i4j92rr/?utm_source=share&utm_medium=web2x&context=3
        //? I'm not disabling the rule, because it's nice to know about.
        return <FontAwesomeIcon className={collapseIconClasses} icon={faCircleCaretDown} size="2x"
            onClick={() => setExpanded(!isExpanded)} />
    }

    console.log(`Am I a big boi:\t${isExpanded}`);

    const contentClasses = classNames("collapsible-content", {
        "minimised-content": !isExpanded
    });

    return <SeparatorSection className="collapsible-section">
        <div className="collapsible-header">
            <div className="header-highlight highlight-container">
                <div className="header-image-overlay">
                    <HighlightImage image={props.headerImage} title={props.headerTitle} />
                    <div className="highlight-card-info">
                        {createCollapseIcon(true)}
                    </div>
                </div>
                <div className="highlight-description">
                    <p className="header-summary">{props.headerSummary}</p>
                </div>
            </div>
            
            {createCollapseIcon(false)}
        </div>
        <div className={contentClasses}>
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