import React, { useState } from "react";

import axios from "axios";

import SpotifyPlayer from "../../SpotifyPlayer";

/**
 * Retrieves my most recently played song from Last.FM.
 * Also renders a Spotify player to preview said song.
 */
function MostRecentTrack(props) {
    const [recentTracks, setRecentTracks] = useState([]);

    function getRecentTracks() {
        console.log("Retrieving my most recent track from LastFM.");

        axios.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&format=json", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "user": "Sk8terTiger"
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

    return <section id="recent-tracks">
        {recentTracks.length > 0 && <div>
            <div>
                {Object.hasOwn(lastTrack, "@attr") && lastTrack["@attr"].nowplaying
                    ? <h3>Here's what I'm currently listening to!</h3>
                    : <h3>Here's the last song I listened to!</h3>
                }
            </div>
            <SpotifyPlayer album={lastTrack.album["#text"]} artist={lastTrack.artist["#text"]} song={lastTrack.name} />
        </div>}
    </section>
}

export default MostRecentTrack;