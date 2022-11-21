import React, { useContext, useState } from "react";
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

    if (trackInfo == null || props.song != trackInfo.name) {
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
            console.log(data);
            setTrackInfo(data.best_match.items[0]);
        })
        .catch(err => console.error(err));
    }

    console.log(trackInfo);

    return trackInfo === null
        ? <Loader />
        : <div className="spotify-player">
            <iframe src={`https://open.spotify.com/embed/track/${trackInfo.id}?utm_source=generator&theme=0`} width="100%" height="352"
                frameBorder="0" allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
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
    album: "Pure Heroine (Extended)",
    artist: "Lorde",
    song: "Ribs"
}

export default SpotifyPlayer;