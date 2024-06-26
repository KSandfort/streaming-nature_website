import YouTubePlayer from "./YouTubePlayer";
import "../../scss/custom.scss";
import MetaDataFrame from "./MetaDataFrame";
import WorldMapPanel from "./WorldMapPanel";

function StreamFrame() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <YouTubePlayer />
        </div>
        <div className="col">
          <MetaDataFrame />
        </div>
      </div>
      <div className="row">
        <WorldMapPanel />
      </div>
    </div>
  );
}

export default StreamFrame;
