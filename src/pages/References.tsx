import "../../scss/custom.scss";

import NavBar from "./../components/NavBar";
import TopHeader from "./../components/TopHeader";

function References() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
    </div>
  );
}

export default References;
