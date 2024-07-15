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
        Senior Software Development Engineer in Test
        <br />
        December 2019 - Present
    </p>

    return <Content id="career">
        <SeparatorSection id="career-intro">
            <SeparatorDiv>
                <h1>My Career</h1>
                <p>
                    I'm working on the foundations of an emerging career, that started after graduating from The University of St. Andrews in 2019.
                </p>
            </SeparatorDiv>
        </SeparatorSection>
        <CollapsibleSection id="everbridge" expanded={true} headerTitle="Everbridge" headerSummaryComponent={everbridgeSummary}
            headerImage="https://www.everbridge.com/wp-content/uploads/2022/07/Everbridge-Logo-2019-FullColor-RGB.svg">
            <SeparatorDiv id="overview">
                <h2>Overview</h2>
                <p>
                    Working as a part of the <TextLink text="Control Center" url="https://www.everbridge.com/products/control-center/" /> team,
                    I'm automating our testing processes to help deliver product iterations faster, without comprimising on quality.
                    <br /><br />
                    I have also concurrently worked as a scrum master, assisted with manual testing, and lent a hand implementing product features
                    whenever necessary.
                </p>
            </SeparatorDiv>
            <SeparatorDiv id="technologies">
                <h2>Technologies/Concepts</h2>
                <div id="technologies-list">
                    <div>
                        <ul>
                            <li>C#</li>
                            <li>SpecFlow (Cucumber)</li>
                            <li>PowerShell</li>
                            <li>Batch</li>
                            <li>Team Foundation Server (TFS)/Azure DevOps</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Scrum (Agile Development)
                                <ul>
                                    <li>Working in a SAFe environment</li>
                                </ul>
                            </li>
                            <li>Jira (Including its API)</li>
                            <li>Zephyr Squad Server (Including its API)</li>
                        </ul>
                    </div>
                </div>
            </SeparatorDiv>
            <SeparatorDiv id="responsibilities">
                <h2>Responsibilities</h2>
                <div id="responsibilities-list">
                    <div>
                        <ul>
                            <li>Development of new automated tests.</li>
                            <li>Maintenance of over 230 UI automated tests.</li>
                            <li>Managing automated build pipelines used for testing.</li>
                            <li>Investigating new technologies to improve the efficiency of our tests.</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Onboarding new QA team members.</li>
                            <li>Acting as a Scrum Master for the team.</li>
                            <li>Implementation of internal APIs/testing libraries for use across in Everbridge.</li>
                        </ul>
                    </div>
                </div>
            </SeparatorDiv>
        </CollapsibleSection>
    </Content>
}

export default Career;