import React, { Component } from "react";
import Slider from "react-slick";
import "../stylish.css";

import donny from "../../../assets/images/Donny.png";
import cofu from "../../../assets/images/SlideshowCode.png";
import refu from "../../../assets/images/my-work.png";
import nuto from "../../../assets/images/starry.jpeg";

import Overlay from "../Overlay";
import Slide from "../Slide";

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
            <div id="wrapper">
                <a href="#help" data-toggle="collapse"><i className="far fa-question-circle"></i></a>
                <a id="sneaky">
                    You're not supposed to be here are you? No. No you're not. Don't worry,
                    this tag shouldn't be here either. But I've spent too much time debugging
                    this part of this website that I'm settling for this workaround. For now,
                    this'll be gone soon. Mark my words. At 00:09 on the 20th of August 2018, I
                    vowed to get rid of this cheeky little beaky a tag. <br/> <br/>

                    I fixed it. It's been 5 minutes and I fixed it using a z-index... Great...
                    There's no real reason for this tag to be here now. Or you for that matter. 
                    You can stop inspecting now. Go on. Shoo.
                </a>
                <div id="helper">
                    <div id="help" className="collapse show">
                        <p>
                            You can use the arrow keys to cycle through the slides if you'd like. 
                            Or if you're pretty fancy with a touch-screen laptop go ahead and 
                            swipe that bad boy. <br /> Satisfying, isn't it?
                        </p>
                    </div>  
                </div>
            </div>

            <Slider {...slicky}>
                <div ref={this.initSlide} className="my-slide">
                    <Slide github="https://github.com/VictorIJnr/Is-Your-Country-A-Shithole-"
                                website="https://shithole.herokuapp.com/">
                        <h2>IYCASH</h2>
                        <p>
                            Empirical analysis to determine whether or not a country is a 
                            "shithole" in the eyes of Donald Trump
                        </p>
                        <img src={donny} alt="First slide" />
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