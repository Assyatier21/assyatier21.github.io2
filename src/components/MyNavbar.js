import { Link } from "react-router-dom";
import codeIcon from "../assets/img/logo2.png";

const MyNavbar = () => {
  return (
    <div>
      <nav className="nav-desk">
        <center>
          <div className="nav-logo">
            <Link to="/">
              <img id="logo" src={codeIcon} alt="Nav-Logo" />
            </Link>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <span>
                  <Link to="/">About</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/work">Work</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">Contact</Link>
                </span>
              </li>
            </ul>
          </div>
        </center>
      </nav>
    </div>
  );
};

export default MyNavbar;
