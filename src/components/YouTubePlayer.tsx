import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  const videoId = 'dlP_vzAxX_8'; // Replace this with your YouTube live video ID

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  const onReady = (event: { target: { playVideo: () => void; }; }) => {
    // You can do something when the player is ready
    event.target.playVideo(); // Autoplay the video when the player is ready
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;