import "../scss/custom.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Team from "./pages/Team";
import References from "./pages/References";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/team" Component={Team} />
        <Route path="/references" Component={References} />
      </Routes>
    </Router>
  );
}

export default App;
