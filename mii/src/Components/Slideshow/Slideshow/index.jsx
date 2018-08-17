import React, { Component } from "react";
import donny from "../../../assets/images/Donny.png";
import cofu from "../../../assets/images/SlideshowCode.png";
import refu from "../../../assets/images/my-work.png";

class Slideshow extends Component {

    render() {
        return (<div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={donny} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={cofu} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={refu} alt="Third slide" />
                </div>
            </div>
        </div>);
    }

}

export default Slideshow;