import "../../scss/custom.scss";
import LoginField from "../components/LoginField";

import NavBar from "./../components/NavBar";
import TopHeader from "./../components/TopHeader";

function Login() {
  return (
    <div className="bg-primary">
      <header>
        <TopHeader />
        <NavBar />
      </header>
      <LoginField />
    </div>
  );
}

export default Login;
