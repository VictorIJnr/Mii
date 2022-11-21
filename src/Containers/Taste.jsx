import React, { useState } from "react";

import axios from "axios";

import Loader from "../Components/Loader";
import SpotifyAuth from "../Context/SpotifyAuth";
import MostRecentTrack from "./LastFm/RecentTracks";

/**
 * Retrieves and renders what is considered my current taste in music.
 * Queries Last.fm to see what I've been listening to recently.
 * I'm thinking we can query Spotify for album art, and maybe a player too.
 * 
 * Shoutout to Aitch btw. My man made it shake.
 */
function Taste(props) {
    const [spotifyAuthToken, setSpotifyAuthToken] = useState(null);
    
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
    
    const questionable = [
        // Baby Shark - Jauz Remix
        "https://open.spotify.com/track/3E4a16orMZ7IVg5KzlMAMM?si=d716b050c3124737",
        
        // Flume - Only Fans
        "https://open.spotify.com/track/5syhuDL0LeXs0T1KSW7lkV?si=760057d45638495f",

        // The Chainsmokers - Don't Let Me Down (Won a Grammy)
        "https://open.spotify.com/track/1i1fxkWeaMmKEB4T7zqbzK?si=c6f5f2b580554226",

        // Billie Eilish - everything i wanted (Won a Grammy)
        "https://open.spotify.com/track/3ZCTVFBt2Brf31RLEnCkWJ?si=ef9b531f417d45ad"
    ];

    const tasteIntro = <>
        <h2>Don't judge me too much</h2>
        <p>Or do. I like my music, some good, and some that won't win a Grammy anytime soon&nbsp;
            <a href={questionable[Math.floor(Math.random() * questionable.length)]}>(or maybe they will?)</a> but I still love them regardless.</p>
    </>;

    return <section id="music-taste">
        {spotifyAuthToken === null
            ? 
            <Loader />
            : <div>
                {tasteIntro}
                <SpotifyAuth.Provider value={spotifyAuthToken}>
                    <MostRecentTrack />
                </SpotifyAuth.Provider>
            </div>
        }
    </section>
}

export default Taste;