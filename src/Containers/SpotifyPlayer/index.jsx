import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import SpotifyAuth from "../../Context/SpotifyAuth";
import Loader from "../../Components/Loader";

import "./stylish.css";

/**
 * Retrieves the necessary information needed to render a player for a preview of a song.
 * Should only be rendered within another container/component which generates a Spotify access token.
 */
function SpotifyPlayer(props) {
    const authToken = useContext(SpotifyAuth);
    const [trackInfo, setTrackInfo] = useState(null);

    const audioPlayer = useRef(null);

    const intervalTime = 200;
    const fadePlayerAudio = setInterval(() => {
        const currentPlayer = audioPlayer.current;

        if (currentPlayer !== null) {
            console.log(currentPlayer.volume);

            // Fade the audio from 28 seconds onwards
            const startTime = 20;

            if ((currentPlayer.currentTime >= startTime) && (currentPlayer.volume !== 0.0)) {
                currentPlayer.volume -= (30 - startTime) / (1000 / intervalTime);
            }
    
            if (currentPlayer.volume < 0.05) {
                currentPlayer.volume = 0;
                clearInterval(fadePlayerAudio);
            }
        }
    }, intervalTime);

    //? We can rework this with a ref.
    // https://stackoverflow.com/a/26869192
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

    if (trackInfo == null) {
        axios.get("https://api.spotify.com/v1/search", {
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            params: {
                type: "track",
                q: `${props.artist} ${props.song} ${props.album}`,
                // q: `Vigilante Shit Taylor Swift 3AM`,
                // q: `Lorde Ribs Pure Heroine`,
                // q: `The Chainsmokers The Reaper World War Joy`,
                // q: `sober rob Moving On Salt`,
                // q: `kotori hummingbird`,
                // q: `Matsirt My Friend Monstercat 20 Altitude`,
                // q: `Sober II`,
                best_match: true,
                limit: 5
            }
        })
        .then(({ data }) => {
            setTrackInfo(data.best_match.items[0])
            console.log("Track info called")
        })
        .catch(err => console.error(err));
    }

    const albumImage = trackInfo !== null 
        ? trackInfo.album.images.find(image => image.height === 300)
        : "";

    // console.log(authToken);

    return trackInfo === null
        ? <Loader />
        : <div className="spotify-player">
            <img src={albumImage.url} alt={`${props.album} Album Art`} />
            <video src={trackInfo.preview_url} controls ref={audioPlayer} />
        </div>
}

SpotifyPlayer.propTypes = {
    // The album the song appears on.
    album: PropTypes.string,

    // The song's artist.
    artist: PropTypes.string,

    // The name of the song to be played.
    song: PropTypes.string
}

SpotifyPlayer.defaultProps = {
    album: "Pure Heroin (Extended)",
    artist: "Lorde",
    song: "Ribs"
}

export default SpotifyPlayer;