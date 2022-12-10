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
    const [bufferCheckHandle, setBufferCheckHandle] = useState(null);

    useEffect(() => {
        if (videoRef.current !== null && videoRef.current !== undefined) videoRef.current.play();
        
        if (bufferCheckHandle === null) checkPlayerBuffer();

        return () => {
            if (bufferCheckHandle !== null) {
                clearInterval(bufferCheckHandle);
                setBufferCheckHandle(null);
                
                console.log(`Cleared interval #${bufferCheckHandle}.`);
            }
        }
    });

    /**
     * Enables a check on the MiniPlayer to determine whether the video is buffering waiting for new data.
     * If we're showing the controls, there's an built-in buffering mechanism.
     * But, we're not showing them.
     */
    function checkPlayerBuffer() {
        //? Checking every second whether the video is buffering.
        const checkInterval = 1000; 

        let lastPlayedTime = 0;
        let currentVideoTime = 0;
        
        function checkBuffering() {
            const currentVideo = videoRef.current;
            currentVideoTime = currentVideo.currentTime;

            //? The maximum duration playback can be paused, for which, we don't count the video as buffering.
            const maxBufferSeconds = (checkInterval / 2) / 1000;
            const lastPlayedThreshold = lastPlayedTime + maxBufferSeconds;
            const hasRestarted = lastPlayedTime > currentVideoTime;

            //? If the video was not previously buffering, but it has now exceeded the threshold, we consider it as currently buffering.
            //? We consider the inverse as the video not buffering.
            if (!isBuffering && currentVideoTime < lastPlayedThreshold && !hasRestarted && !currentVideo.paused) setIsBuffering(true);
            else if (isBuffering && currentVideoTime > lastPlayedThreshold && !currentVideo.paused) setIsBuffering(false);

            lastPlayedTime = currentVideoTime;
        }

        setBufferCheckHandle(setInterval(checkBuffering, checkInterval));
    }

    const playerBufferClasses = classNames("player-buffer-container", {
        "player-buffer-hidden": !isBuffering
    });

    return <div className="player-wrapper">
        <div className={playerBufferClasses}>
            <div className="player-buffer-overlay" />
            <Loader />
        </div>

        {/* We have to mute the video, otherwise we can't call .play(), because web browsers think that's annoying. */}
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