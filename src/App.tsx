import "../scss/custom.scss";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import TestButton from "./components/TestButton";
import TopHeader from "./components/TopHeader";
import WordCloud from "./components/WordCloud";

function App() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <MainContent />
      <TestButton />
      <Footer />
    </div>
  );
}

export default App;
