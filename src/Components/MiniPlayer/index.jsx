import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import Loader from "../Loader";

import "./stylish.css";

/**
 * Standardised GIF player. 
 * Should be used for GIFs generated from gource visualisations.
 */
function MiniPlayer(props) {
    const videoRef = useRef();
    const [isBuffering, setIsBuffering] = useState(false);
    
    useEffect(() => {
        if (videoRef.current !== null && videoRef.current !== undefined) videoRef.current.play();
    });

    const playerBufferClasses = classNames("player-buffer-container", {
        "player-buffer-hidden": isBuffering
    });

    return <div className="player-wrapper">
        <div className={playerBufferClasses}>
            <div className="player-buffer-overlay"/>
            <Loader />
        </div>
        <video src={props.src} ref={videoRef} loop={true} muted={true} />
    </div>
}

MiniPlayer.propTypes = {
    //? The source to be used for the video.
    src: PropTypes.any
};

MiniPlayer.defaultProps = {
    src: "https://d1cuiew8u1gk5n.cloudfront.net/bu/history.mp4"
}

export default MiniPlayer;