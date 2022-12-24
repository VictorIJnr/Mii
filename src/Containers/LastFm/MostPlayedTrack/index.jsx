import React, { useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import SpotifyPlayer from "../../SpotifyPlayer";
import Loader from "../../../Components/Loader";

import "../stylish.css";
import "../responsive.css"

/**
 * Retrieves the most played songs from Last.FM over a given period.
 */
function MostPlayedTrack(props) {
    const [mostPlayedTrack, setMostPlayedTrack] = useState(null);

    /**
     * Retrieves my most played tracks from Last.fm over a given time frame.
     */
    function getMostPlayedTrack() {
        console.log(`Retrieving my most played track from Last.fm for the time frame "${props.timeFrame}".`);

        axios.get("http://ws.audioscrobbler.com/2.0/", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "method": "user.gettoptracks",
                "format": "json",
                "user": "Sk8terTiger",
                "limit": 3,
                "period": props.timeFrame
            }
        })
            .then(({ data }) => {
                console.log(data);
                setMostPlayedTrack(data.toptracks.track[0]);
            })
            .catch(err => console.error(err));
    };

    if (mostPlayedTrack === null) {
        getMostPlayedTrack();

        //? Honestly, we could get away without an interval here.
        //? It's unlikely to change whilst it's being looked at.
        //? Nah, I'll keep it, it'll be cool to see it change if I'm listening to a song that then ends up here :D
        setInterval(getMostPlayedTrack, 5 * 60 * 1000);
    }

    let timeFrameText = "";
    let trackDescription = "";

    if (mostPlayedTrack !== null) {
        switch (props.timeFrame) {
            case "7day":
                timeFrameText = "This week, I've had this on repeat:";
                trackDescription = `${mostPlayedTrack.playcount} listens this week. Probably just a flash in the pan.`;
                break;
            case "1month":
                timeFrameText = "My favourite song this month:"
                trackDescription = `${mostPlayedTrack.playcount} plays isn't "flash in the pan" territory.`;
                break;
            case "3month":
                timeFrameText = "What I'm liking this quarter:"
                trackDescription = `${mostPlayedTrack.playcount} times this quarter. I'll aim for 10% growth QoQ.`;
                break;
            case "6month":
                timeFrameText = "I've put up with this for 6 months:";
                trackDescription = `I've suffered by listening to this ${mostPlayedTrack.playcount} times. Help.`;
                break;
            case "overall":
                //? Who are we kidding? It's going to be Ribs. And second will be everything i wanted.
                timeFrameText = `Here's ${mostPlayedTrack.name} by ${mostPlayedTrack.artist.name}.`;
                trackDescription = `My most played song. Just ${mostPlayedTrack.playcount} listens. Nothing special.`;
                break;
            default:
                timeFrameText = "I've listened to this too much this year"
                trackDescription = `${mostPlayedTrack.playcount} times in fact. Good thing I can multitask.`
                break;
        }
    }

    return <div className="most-played-track">
        {mostPlayedTrack === null
            ? <Loader />
            : <>
                <h3>{timeFrameText}</h3>
                {/* The album cannot be retrieved in the same API request. So we'll just YOLO it and hope we get the right album. */}
                <SpotifyPlayer artist={mostPlayedTrack.artist.name} song={mostPlayedTrack.name} />
                <p>{trackDescription}</p>
            </>
        }
    </div>
}

MostPlayedTrack.propTypes = {
    timeFrame: PropTypes.oneOf(["7day", "1month", "3month", "6month", "12month", "overall"])
}

MostPlayedTrack.defaultProps = {
    timeFrame: "12month"
}

export default MostPlayedTrack;