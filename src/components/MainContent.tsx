import SourceTimer from "./SourceTimer";
import YouTubePlayer from "./YouTubePlayer";

function MainContent() {
  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col col-lg-1">Metadata</div>
        <div className="col-10 h-75 bg-light">
          <br />
          <YouTubePlayer />
          <SourceTimer />
        </div>
        <div className="col col-lg-1">Additional Information</div>
      </div>
    </div>
  );
}

export default MainContent;
