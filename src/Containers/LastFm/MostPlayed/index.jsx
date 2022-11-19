import React from "react";
import PropTypes from "prop-types";

/**
 * Retrieves the most played songs from Last.FM over a given period.
 */
function MostPlayed(props) {
    return <></>
}

MostPlayed.propTypes = {
    timeframe: PropTypes.oneOf(["week", "year", "all"])
}

MostPlayed.defaultProps = {
    timeframe: "year"
}

export default MostPlayed;