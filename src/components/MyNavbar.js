import { NavLink } from "react-router-dom";
import codeIcon from "../assets/img/logo2.png";

const MyNavbar = () => {
  return (
    <div>
      <nav className="nav-desk align-items-center">
        <center>
          <div className="nav-logo">
            <NavLink exact to="/">
              <img id="logo" src={codeIcon} alt="Nav-Logo" />
            </NavLink>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <span>
                  <NavLink exact to="/">
                    About
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink exact to="/work">
                    Project
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </center>
      </nav>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <NavLink style={{ textDecoration: `underline` }} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/work">Project</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
