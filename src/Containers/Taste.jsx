import React, { useState } from "react";

import axios from "axios";
import Loader from "../Components/Loader";

/**
 * Retrieves and renders what is considered my current taste in music.
 * Queries Last.fm to see what I've been listening to recently.
 * I'm thinking we can query Spotify for album art, and maybe a player too.
 * 
 * Shoutout to Aitch btw. My man made it shake.
 */
function Taste(props) {
    const [hasSpotifyAuthToken, setHasSpotifyAuthToken] = useState(false);
    const [hasLastFmInfo, setHasLastFmInfo] = useState(false);

    const spotifyConfig = axios.create({
        baseURL: "https://api.spotify.com/v1"
    });

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
            spotifyConfig.defaults.headers = {
                "Authorization": `Bearer ${data.access_token}`,
                "Content-Type": "application/x-www-form-urlencoded"
            };

            setHasSpotifyAuthToken(true);
            getLastFmInfo();
    
            // Refresh the token every 54 minutes, if they expire in an hour.
            setTimeout(getSpotifyToken, data.expires_in * 900);
        }).catch(err => console.error(err));
    };

    function getLastFmInfo() {
        axios.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&format=json", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "user": "Sk8terTiger"
            }
        }).then(({ data }) => {
            // let trackName = data.recenttracks.track;
            console.log(data.recenttracks.track);

            data.recenttracks.track.forEach(track => {
                console.log(Object.hasOwn(track, "@attr"))
            });

            spotifyConfig.get("/search", {
                params: {
                    type: "track",
                    q: "Taylor Swift Vigilante Shit",
                    // q: "The Chainsmokers I Love U",
                    best_match: true,
                    limit: 5
                }
            }).then(({ data }) => {
                console.log(data);
            }).catch(err => {
                console.error(err);
            });
        }).catch(err => {
            console.error(err);
        });
    };

    if (!hasSpotifyAuthToken) getSpotifyToken();

    return <section>
        {hasSpotifyAuthToken 
            ? <h1>Spotti Botti Fy</h1>
            : <Loader />}
    </section>
}

export default Taste;