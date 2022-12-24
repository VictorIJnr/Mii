import React, { useState } from "react";

import axios from "axios";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/sharp-solid-svg-icons";

import SpotifyPlayer from "../../SpotifyPlayer";
import Loader from "../../../Components/Loader";

import "../stylish.css";
import "../responsive.css"

/**
 * Retrieves my most recently played song from Last.FM.
 * Also renders a Spotify player to preview said song.
 */
function MostRecentTrack(props) {
    const [recentTracks, setRecentTracks] = useState([]);

    function getRecentTracks() {
        console.log("Retrieving my most recent track from LastFM.");

        axios.get("https://ws.audioscrobbler.com/2.0/", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "method": "user.getrecenttracks",
                "format": "json",
                "user": "Sk8terTiger",
                "limit": 1
            }
        })
            .then(({ data }) => setRecentTracks(data.recenttracks.track))
            .catch(err => console.error(err));
    };

    if (recentTracks.length === 0) {
        getRecentTracks();
        setInterval(getRecentTracks, 15000);
    }

    const lastTrack = recentTracks.length > 0 ? recentTracks[0] : {};
    const isPlaying = Object.hasOwn(lastTrack, "@attr") && lastTrack["@attr"].nowplaying;

    return <div className="most-recent-track">
        {recentTracks.length === 0
            ? <Loader />
            : <>
                {isPlaying
                    ? <h3>What I'm currently listening to:</h3>
                    : <h3>The last song I listened to:</h3>
                }
                <SpotifyPlayer album={lastTrack.album["#text"]} artist={lastTrack.artist["#text"]} song={lastTrack.name} />
                <p className={classNames({ "currently-playing": isPlaying })}><FontAwesomeIcon icon={faCompactDisc} size="2x" spin={isPlaying} /></p>
            </>
        }
    </div>
}

export default MostRecentTrack;