import React from "react";
import PropTypes from "prop-types";

import bu from "../../assets/images/gifs/bu.gif";

import "./stylish.css";

/**
 * Standardised GIF player. 
 * Should be used for GIFs generated from gource visualisations.
 */
function MiniPlayer(props) {
    return <img src="https://d1cuiew8u1gk5n.cloudfront.net/bu/history.gif" alt="A GIF" />
}

MiniPlayer.propTypes = {
    //? The source to be used for the video.
    src: PropTypes.any
};

MiniPlayer.defaultProps = {
    src: bu
}

export default MiniPlayer;