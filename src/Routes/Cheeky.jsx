import React from "react";
import Header from "../Components/Header";
import Slideshow from "../Components/Slideshow/Slideshow";
import Content from "../Components/Content";

function Cheeky(props) {
    return <div className="site">
        <Header selected="cheeky" />
        <Content>
            <Slideshow />
        </Content>
    </div>;
}

export default Cheeky;