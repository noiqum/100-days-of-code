import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgLogo } from "../../sass/svg/100.svg";
//style=navbar.scss
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <SvgLogo />
      </div>
      <nav>
        <ul>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
          <Link to="/signup">
            {" "}
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
