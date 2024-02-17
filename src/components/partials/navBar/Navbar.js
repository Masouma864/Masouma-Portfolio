import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import './Navbar.css';

const data = [
  {
    lable: "Home",
    to: "/",
  },
  {
    lable: "About",
    to: "/about",
  },
  {
    lable: "Resume",
    to: "/resume",
  },
  {
    lable: "Service",
    to: "/service",
  },
  {
    lable: "Portfolio",
    to: "/portfolio",
  },
  {
    lable: "Contact",
    to: "/contact",
  },
];

const Navbar = ({style}) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleHandler = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = () => {
    setToggleIcon(false);
  };

  return (
    <section id="header" className={`header-tops${toggleIcon ? " mobile-view" : ""}`} style={style}>
      <div className="container" style={style}>
        <Link to={"/"} className="container__logo">
          <FaReact size={30} />
        </Link>

        <nav id="navbar" className={`navbar${toggleIcon ? " navbar-mobile" : ""}`}>
          <ul >
            {data.map((item, key) => (
              <li key={key} className="navbar_menu_container_item">
                <Link to={item.to} className="nav-link" onClick={handleLinkClick}>
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon mobile-nav-toggle" onClick={toggleHandler}>
            {
              toggleIcon ? <HiX size={30}/> :<FaBars size={30}/>
            }
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
