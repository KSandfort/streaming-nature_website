import YouTube from "react-youtube";

const YouTubePlayer = () => {
  let currentURL = "";

  const fetchStreamURL = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/v1/streams?score_number=0"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.text();
      console.log("Fetched Data:", data);
      currentURL = data.toString();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const opts = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  const onReady = (event: { target: { playVideo: () => void } }) => {
    event.target.playVideo(); // Autoplay the video when the player is ready
    fetchStreamURL();
  };

  return <YouTube videoId={currentURL} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;
