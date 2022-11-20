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
    const [recentTracks, setRecentTracks] = useState([]);
    const [lastTrackInfo, setLastTrackInfo] = useState(null);

    const spotifyConfig = axios.create({
        baseURL: "https://api.spotify.com/v1"
    });

    /**
     * Retrieves an access token from Spotify's API using OAuth2.
     */
    function getSpotifyToken() {
        console.log("Retrieving access token.");
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
            })
            .catch(err => console.error(err));
    };

    function getLastFmInfo() {
        console.log("Retrieving LastFM info.");
        axios.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&format=json", {
            params: {
                "api_key": process.env.REACT_APP_LAST_FM_API_KEY,
                "user": "Sk8terTiger"
            }
        }).then(({ data }) => {
            console.log(data.recenttracks.track);
            setRecentTracks(data.recenttracks.track);

            getSpotifyTrackInfo(data.recenttracks.track[0]);
        })
        .catch(err => console.error(err));
    };

    function getSpotifyTrackInfo(track) {
        console.log("Retrieving track info.");
        
        spotifyConfig.get("/search", {
            params: {
                type: "track",
                q: `${track.artist["#text"]} ${track.name} ${track.album["#text"]}`,
                // q: `Vigilante Shit Taylor Swift 3AM`,
                // q: `Lorde Ribs Pure Heroin`,
                // q: `The Chainsmokers The Reaper World War Joy`,
                // q: `sober rob Moving On Salt`,
                // q: `kotori hummingbird`,
                // q: `Matsirt My Friend Monstercat 20 Altitude`,
                // q: `Sober II`,
                best_match: true,
                limit: 5
            }
        })
        .then(({ data }) => setLastTrackInfo(data.best_match.items[0]))
        .catch(err => console.error(err));
    }

    const lastTrack = recentTracks.length > 0 ? recentTracks[0] : {};
    if (!hasSpotifyAuthToken) getSpotifyToken();
    
    let trackPlayer = <></>
    if (lastTrackInfo !== null) {
        console.log(lastTrackInfo);

        let albumImage = lastTrackInfo.album.images.find(image => image.height === 300);
        console.log(albumImage);

        //? We can rework this with a ref.
        // https://stackoverflow.com/a/26869192

        // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
        trackPlayer = <div>
            <img src={albumImage.url} />
            <video src={lastTrackInfo.preview_url} controls />
        </div>
    }

    return <section>
        {hasSpotifyAuthToken
            ? <h1>Spotti Botti Fy</h1>
            : <Loader />}
        {recentTracks.length > 0 && <div>
            <div>
                {Object.hasOwn(lastTrack, "@attr") && lastTrack["@attr"].now_playing
                    ? <p>I'm currently listening to {lastTrack.name} by {lastTrack.artist["#text"]}</p>
                    : <p>The last song I listened to was {lastTrack.name} by {lastTrack.artist["#text"]}</p>
                }
            </div>
            {lastTrackInfo !== null && trackPlayer}
        </div>}
    </section>
}

export default Taste;