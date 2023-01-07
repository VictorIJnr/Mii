import React from "react";

import Content from "../../Components/Layout/Content";
import TextLink from "../../Components/Navigation/TextLink";

/* Renders a basic 404 page. */
function NotFound(props) {
    const routes = [
        {
            path: "projects",
            displayText: "some projects I created"
        },
        {
            path: "career",
            displayText: "my professional career so far"
        },
        {
            path: "playground",
            displayText: "some nonsense I've put together"
        }
    ];

    const routeInfo = routes[Math.floor(Math.random() * routes.length)];

    return <Content>
        <h1 style={{ marginTop: 0 }}>What did you do?</h1>
        <p style={{ textAlign: "center" }}>
            Either you tried to explore somewhere that doesn't exist, or my hosting messed up.
            <br />
            Regardless, how about you take a look at <TextLink path={routeInfo.path} text={routeInfo.displayText} />.
        </p>
    </Content>
}

export default NotFound;