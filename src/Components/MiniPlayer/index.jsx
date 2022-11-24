import React from "react";
import PropTypes from "prop-types";

import bu from "../../assets/videos/bu-1080.mp4";

import "./stylish.css";

/**
 * Standardised GIF player. 
 * Should be used for GIFs generated from gource visualisations.
 */
function MiniPlayer(props) {
    return <video src={props.src} autoPlay={true} loop={true}>

    </video>
}

MiniPlayer.propTypes = {
    //? The source to be used for the video.
    src: PropTypes.any
};

MiniPlayer.defaultProps = {
    src: bu
}

export default MiniPlayer;