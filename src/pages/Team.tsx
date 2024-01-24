import "../../scss/custom.scss";
import TeamSection from "../components/TeamSection";

import NavBar from "./../components/NavBar";
import TopHeader from "./../components/TopHeader";

function Team() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <TeamSection />
    </div>
  );
}

export default Team;
