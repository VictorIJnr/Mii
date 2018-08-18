import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../stylish.css";

import donny from "../../../assets/images/Donny.png";
// import cofu from "../../../assets/images/SlideshowCode.png";
import refu from "../../../assets/images/my-work.png";
import nuto from "../../../assets/images/starry.jpeg";

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
            <Slider autoFocus {...slicky}>
                {/* {this.props.children} */}

                <div ref={this.initSlide}>
                    <img src={donny} alt="First slide" />
                </div>
                {/* <div>
                    <img src={cofu} alt="Second slide" />
                </div> */}
                <div>
                    <img src={nuto} alt="Third slide" />
                </div>
                <div>
                    <img src={refu} alt="Fourth slide" />
                </div>
            </Slider>
        </div>);
    }

}

export default Slideshow;