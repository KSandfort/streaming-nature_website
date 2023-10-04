import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";
function App() {
  return (
    <div>
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
