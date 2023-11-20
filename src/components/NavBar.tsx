import "../../scss/custom.scss";

function NavBar() {
  return (
    <ul className="nav justify-content-center display-6 bg-secondary">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
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
    </ul>
  );
}

export default NavBar;
