import React, { useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import SpotifyPlayer from "../../SpotifyPlayer";
import Loader from "../../../Components/Loader";

/**
 * Retrieves the most played songs from Last.FM over a given period.
 */
function MostPlayedTrack(props) {
    const [mostPlayedTrack, setMostPlayedTrack] = useState([]);

    function getMostPlayedTrack() {
        console.log(`Retrieving my most played track from Last.fm for the time frame "${props.timeFrame}".`);

        axios.get("http://ws.audioscrobbler.com/2.0/", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "method": "user.gettoptracks",
                "format": "json",
                "user": "Sk8terTiger",
                "limit": 1,
                "period": props.timeFrame
            }
        })
            .then(({ data }) => {
                console.log(data);
                setMostPlayedTrack(data.toptracks.track[0])
            })
            .catch(err => console.error(err));
    };

    if (mostPlayedTrack.length === 0) {
        getMostPlayedTrack();

        //? Honestly, we could get away without an interval here.
        //? It's unlikely to change whilst it's being looked at.
        //? Nah, I'll keep it, it'll be cool to see it change if I'm listening to a song that then ends up here :D
        setInterval(getMostPlayedTrack, 5 * 60 * 1000);
    }

    let timeFrameText = "";
    switch(props.timeFrame) {
        case "7day":
            timeFrameText = "over the last week";
            break;
        case "overall":
            timeFrameText = "of all time";
            break;
        default:
            timeFrameText = "over the last year"
            break;
    }

    return <div className="most-played-track">
        {mostPlayedTrack.length === 0
            ? <Loader />
            : <>
                <h3>My most-played song {timeFrameText}!</h3>
                <SpotifyPlayer artist={mostPlayedTrack.artist.name} song={mostPlayedTrack.name} />
            </>
        }
    </div>
}

MostPlayedTrack.propTypes = {
    timeFrame: PropTypes.oneOf(["7day", "12month", "overall"])
}

MostPlayedTrack.defaultProps = {
    timeFrame: "12month"
}

export default MostPlayedTrack;