import "../../scss/custom.scss";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav justify-content-center display-6 bg-secondary">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Team
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          References
        </a>
      </li>
      <li className="nav-item">
        <button type="button" className="btn btn-light">
          <Link to="/login">Login</Link>
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
