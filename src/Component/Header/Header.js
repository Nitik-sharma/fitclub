import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Menu from "../../assets/bars.png";
import { Link } from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      {openMenu === false && mobile === true ? (
        <div className="bars" onClick={() => setOpenMenu(true)}>
          <img src={Menu} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              onClick={() => setOpenMenu(false)}
              spna={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={() => setOpenMenu(false)}
              spna={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              onClick={() => setOpenMenu(false)}
              spna={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              onClick={() => setOpenMenu(false)}
              spna={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              onClick={() => setOpenMenu(false)}
              spna={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
