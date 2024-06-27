// import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const YouTubePlayer_old = () => {
  // Adapt the refresh interval

  const videoURL =
    "https://www.youtube.com/embed/live_stream?channel=UCHk9qZcr6xQ1TdCI7F0u5QA";

  /*
  const refrestIntervalMs: number = 10000;
  const [counter, setCounter] = useState(0);
  const [videoURL, setVideoURL] = useState<string>("initialVideoId");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      console.log("Change stream " + counter);
    }, refrestIntervalMs);

    const fetchStreamURL = async () => {
      try {
        const response = await fetch("http://http://127.0.0.1:8000/v1/streams");

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.text();
        console.log("Fetched Data:", data);
        setVideoURL(data.toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStreamURL();

    return () => clearInterval(interval);
  }, [counter]);
  */

  const opts = {
    height: "480",
    width: "720",
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  const onReady = (event: { target: { playVideo: () => void } }) => {
    event.target.playVideo(); // Autoplay the video when the player is ready
  };

  return <YouTube videoId={videoURL} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer_old;
