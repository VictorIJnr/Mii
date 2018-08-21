import React, { Component } from "react";
import Slider from "react-slick";
import "../stylish.css";

import donny from "../../../assets/images/Donny.png";
import cofu from "../../../assets/images/SlideshowCode.png";
import refu from "../../../assets/images/my-work.png";
import nuto from "../../../assets/images/starry.jpeg";

import Slide from "../Slide";
import Helper from "../../Helper";

class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.initSlide = React.createRef();
    }

    componentDidMount() {
        this.initSlide.current.focus();
    }

    render() {
        let slicky = {
            dots: true,
            arrows: true,
            infinite: true,
            centerMode: true,
            // variableWidth: true,
            fade: true,
            adaptiveHeight: true
        };

        return (<div className="slideshow">
            <Helper>
                You can use the arrow keys to cycle through the slides if you'd like. 
                Or if you're pretty fancy with a touch-screen laptop go ahead and 
                swipe that bad boy. <br /> Satisfying, isn't it?
            </Helper>

            <Slider {...slicky}>
                <div ref={this.initSlide} className="my-slide">
                    <Slide github="https://github.com/VictorIJnr/Is-Your-Country-A-Shithole-"
                                website="https://shithole.herokuapp.com/">
                        <h2>IYCASH</h2>
                        <p>
                            Empirical analysis to determine whether or not a country is a 
                            "shithole" in the eyes of Donald Trump
                        </p>
                        <img src={donny} alt="Is Your Country A Shithole" />
                    </Slide>
                </div>
                <div className="my-slide">
                    <img src={cofu} alt="Second slide" />
                </div>
                <div className="my-slide">
                    <img src={nuto} alt="Third slide" />
                </div>
                <div className="my-slide">
                    <img src={refu} alt="Fourth slide" />
                </div>
            </Slider>
        </div>);
    }

}

export default Slideshow;