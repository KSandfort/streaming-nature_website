import YouTubePlayer from "./YouTubePlayer";
import "../../scss/custom.scss";
import MetaDataFrame from "./MetaDataFrame";
import SubtitleFrame from "./SubtitleFrame";

function StreamFrame() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <YouTubePlayer />
        </div>
        <div className="col">
          <MetaDataFrame />
        </div>
      </div>
      <div className="row">
        <SubtitleFrame />
      </div>
    </div>
  );
}

export default StreamFrame;
