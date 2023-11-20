import SourceTimer from "./SourceTimer";
import YouTubePlayer from "./YouTubePlayer";

function MainContent() {
  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">Metadata</div>
        <div className="col-8 h-75 bg-light border">
          <YouTubePlayer />
          <SourceTimer />
        </div>
        <div className="col col-lg-2">Additional Information</div>
      </div>
    </div>
  );
}

export default MainContent;
