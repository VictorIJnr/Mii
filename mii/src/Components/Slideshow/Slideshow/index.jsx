import React, { Component } from "react";
import Slider from "react-slick";
import "../stylish.css";

import donny from "../../../assets/images/Donny.png";
import cofu from "../../../assets/images/SlideshowCode.png";
import refu from "../../../assets/images/my-work.png";

class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.slideshow = React.createRef();
    }

    componentDidMount() {
        let slider = this.slideshow.current;
        console.log(slider);
        // slider.getElementsByClassName("slick-dots");
    }

    render() {
        let slicky = {
            dots: true,
            arrows: true,
            infinite: true
        };

        return (<div className="slideshow">
            <Slider {...slicky} ref={this.slideshow}>
                {/* {this.props.children} */}

                <div>
                    <img src={donny} alt="First slide" />
                </div>
                <div>
                    <img src={cofu} alt="Second slide" />
                </div>
                <div>
                    <img src={refu} alt="Third slide" />
                </div>
            </Slider>
        </div>);
    }

}

export default Slideshow;