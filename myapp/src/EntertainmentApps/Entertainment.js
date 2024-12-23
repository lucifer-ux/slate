import React from 'react'
import Card from "../Components/Cards/Card";
import netflixLogo from "../assets/Netflix_logo.svg"
import spotifyLogo from "../assets/spotify_logo.png"
import "./Entertainment.css"

const entertainmentapps = () => {
    const appLinks = {
        netFlix : "https://www.netflix.com/"
        , spotify : "https://open.spotify.com/" 
    }
  return (
    <>
    <div className="cardWrapper">
   
      <Card
        gameLibraryName={"Netflix"}
        gameLibraryImage={netflixLogo}
        url={appLinks.netFlix}
      />
      <Card
        gameLibraryName={"Spotify"}
        gameLibraryImage={spotifyLogo}
        url={appLinks.spotify}
      />

    </div>
  </>
  )
}

export default entertainmentapps