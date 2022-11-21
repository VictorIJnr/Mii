import React from "react";
import PropTypes from "prop-types";

/**
 * Retrieves the most played songs from Last.FM over a given period.
 */
function MostPlayed(props) {
    const [mostPlayedTracks, setMostPlayedTracks] = useState([]);

    function getRecentTracks() {
        console.log(`Retrieving my most played tracks from Last.fm. Time frame: ${props.timeFrame}`);

        axios.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&format=json", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "user": "Sk8terTiger"
            }
        })
            .then(({ data }) => setMostPlayedTracks(data.recenttracks.track))
            .catch(err => console.error(err));
    };

    if (mostPlayedTracks.length === 0) {
        getRecentTracks();

        //? Honestly, we could get away without an interval here.
        //? It's unlikely to change whilst it's being looked at.
        //? Nah, I'll keep it, it'll be cool to see it change if I'm listening to a song that then ends up here :D
        setInterval(getRecentTracks, 5 * 60 * 1000);
    }

    return <></>
}

MostPlayed.propTypes = {
    timeFrame: PropTypes.oneOf(["week", "year", "all"])
}

MostPlayed.defaultProps = {
    timeframe: "year"
}

export default MostPlayed;