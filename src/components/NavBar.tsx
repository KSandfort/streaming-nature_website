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
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to="/team" style={{ textDecoration: "none" }}>
            Team
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to="/references" style={{ textDecoration: "none" }}>
            References
          </Link>
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
