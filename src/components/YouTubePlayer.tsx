import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const YouTubePlayer = () => {
  // Adapt the refresh interval
  const refrestIntervalMs: number = 10000;

  // List of all video IDs that are being toggled
  const videoIds = ["VUJbDTIYlM4", "Ihr_nwydXi0", "dlP_vzAxX_8"];

  // Source: https://devtrium.com/posts/set-interval-react
  // Creates an interval to update component
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      console.log("Change stream");
    }, refrestIntervalMs);

    return () => clearInterval(interval);
  }, []);

  const opts = {
    height: "540",
    width: "960",
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
