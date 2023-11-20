import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";

const YouTubePlayer = () => {
  // Adapt the refresh interval
  const refrestIntervalMs: number = 8000;

  // List of all video IDs that are being toggled
  const videoIds = ["VUJbDTIYlM4", "Ihr_nwydXi0", "dlP_vzAxX_8"];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will be called every 3 seconds.");
      setCounter((prevCounter) => prevCounter + 1);
    }, refrestIntervalMs);

    return () => clearInterval(interval);
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  const onReady = (event: { target: { playVideo: () => void } }) => {
    // You can do something when the player is ready
    event.target.playVideo(); // Autoplay the video when the player is ready
  };

  return (
    <YouTube
      videoId={videoIds[counter % videoIds.length]}
      opts={opts}
      onReady={onReady}
    />
  );
};

export default YouTubePlayer;
