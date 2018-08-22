import React, { Component } from "react";
import Slider from "react-slick";
import "../stylish.css";

import donny from "../../../assets/images/Donny.png";
import booky from "../../../assets/images/Bookstream.png";
import bloopy from "../../../assets/images/Bloopy.png";
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
                    <Slide app="https://play.google.com/store/apps/details?
                                id=com.victorjunior.bloopy&hl=en_GB"
                            video="https://youtu.be/LLco2mpWQ-o"
                            website="http://victorsepq.weebly.com/">
                        <h2>Bloopy</h2>
                        <p>
                            An endless runner I made for my EPQ when I was 17<br/><br/>
                            Available to download on Android, don't expect too much though, I 
                            used this to learn Java and the Android SDK
                        </p>
                        <img src={bloopy} alt="Bloopy" />
                    </Slide>
                </div>
                <div className="my-slide">
                    <Slide github="https://github.com/VictorIJnr/Cutex">
                        <h2>Cutex</h2>
                        <p>
                            Contextual triggering and speech recognition for Artificially 
                            Intelligent Assistants <br/><br/>
                            Hopefully serving as the basis for my SH project
                        </p>
                        <img src="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg"
                                alt="Cutex" />
                    </Slide>
                </div>
                <div className="my-slide">
                    <Slide github="https://github.com/VictorIJnr/P2-Databases"
                                website="https://thebookstream.herokuapp.com/">
                        <h2>Bookstream</h2>
                        <p>
                            The second CS3101-Databases practical <br/><br/>
                            There's not really much here, apart from the splash and login screens,
                            unless the St Andrews server decides to cooperate for once
                        </p>
                        <img src={booky} alt="Bookstream" />
                    </Slide>
                </div>
            </Slider>
        </div>);
    }

}

export default Slideshow;