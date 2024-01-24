import "../../scss/custom.scss";
import AboutText from "../components/AboutText";

import NavBar from "./../components/NavBar";
import TopHeader from "./../components/TopHeader";

function About() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <AboutText />
    </div>
  );
}

export default About;
