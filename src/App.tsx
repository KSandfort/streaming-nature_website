import "../scss/custom.scss";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
