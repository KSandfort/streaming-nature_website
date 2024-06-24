import "../../scss/custom.scss";
import WorldMapPanel from "../components/WorldMapPanel";

import Footer from "./../components/Footer";
import MainContent from "./../components/MainContent";
import NavBar from "./../components/NavBar";
import TopHeader from "./../components/TopHeader";

function Home() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <MainContent />
      <WorldMapPanel />
      <Footer />
    </div>
  );
}

export default Home;
