function YouTubePlayer() {
  const embedUrl = "https://www.youtube.com/watch?v=aKUOUsTUJC8&t=74s";
  // "https://www.youtube.com/embed/live_stream?channel=UCHk9qZcr6xQ1TdCI7F0u5QA";

  return (
    <div className="youtube-embed">
      <iframe
        width={720}
        height={480}
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubePlayer;
