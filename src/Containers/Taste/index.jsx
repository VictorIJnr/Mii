import React, { useState } from "react";

import axios from "axios";

import Loader from "../../Components/Loader";
import SpotifyAuth from "../../Context/SpotifyAuth";
import MostRecentTrack from "../LastFm/MostRecentTrack";
import MostPlayedTrack from "../LastFm/MostPlayedTrack";

import "./stylish.css";
import "./responsive.css";

/**
 * Retrieves and renders what is considered my current taste in music.
 * Queries Last.fm to see what I've been listening to recently.
 * I'm thinking we can query Spotify for album art, and maybe a player too.
 * 
 * Shoutout to Aitch btw. My man made it shake.
 */
function Taste(props) {
    const [spotifyAuthToken, setSpotifyAuthToken] = useState(null);

    function getRandomElementInArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Retrieves an access token from Spotify's API using OAuth2.
     */
    function getSpotifyToken() {
        axios.post("https://accounts.spotify.com/api/token", {
            "grant_type": "client_credentials"
        },
            {
                headers: {
                    "Authorization": `Basic ${Buffer.from(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_API_SECRET}`).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(({ data }) => {
                setSpotifyAuthToken(data.access_token);

                // Refresh the token every 54 minutes, if they expire in an hour.
                setInterval(getSpotifyToken, data.expires_in * 900);
            })
            .catch(err => console.error(err));
    };

    if (spotifyAuthToken === null) {
        getSpotifyToken();

        //? These are only here since I only need them to be logged once.
        //? Repeating them's just messy. 🤮
        console.log("I can't imagine anyone being bored enough to look through the console on my website. But you're here now aren't you?");
        console.log("In which case, I'll help you kill some more time, and give you a better insight into my questionable taste in music.");
        console.log("Knock yourself out: https://www.last.fm/user/Sk8terTiger");
    }

    const timeFrames = ["7day", "1month", "3month", "6month", "12month", "overall"];
    const firstTimeFrame = getRandomElementInArray(timeFrames);
    
    timeFrames.splice(timeFrames.indexOf(firstTimeFrame), 1);
    
    const secondTimeFrame = getRandomElementInArray(timeFrames);

    const tasteIntro = <div id="taste-intro">
        <h2>Who doesn't like music?</h2>
        <p>Don't judge my taste too much. Or do. You do you.<br />You'll see a few songs here, some good, and some that won't win a Grammy anytime soon
            but I still love them regardless.</p>
    </div>;

    return <section id="music-taste">
        {tasteIntro}
        {spotifyAuthToken === null
            ?
            <Loader />
            : <div id="music-taste-cards">
                <SpotifyAuth.Provider value={spotifyAuthToken}>
                    <MostRecentTrack />
                    
                    {/* Have this pick two date ranges at random, instead of hard-coding it.  */}
                    <MostPlayedTrack timeFrame={firstTimeFrame} />
                    <MostPlayedTrack timeFrame={secondTimeFrame} />
                </SpotifyAuth.Provider>
            </div>
        }
    </section>
}

export default Taste;