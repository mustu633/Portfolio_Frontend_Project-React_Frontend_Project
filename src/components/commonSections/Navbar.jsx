import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { navlink } from "../data/dummydata";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import 'font-awesome/css/font-awesome.min.css';
import logo from "../data/images/logo.png";

export const Navbar = () => {
  const [resposive, setResposive] = useState(false)
  return (
    <>
      <header>
        <div className="main-box s-btw-flex">
          <div className="logo-box">
            <Link to="/">
            <img src={logo} alt="img" data-aos='slide-up' /></Link>
          </div>
          <div className={resposive ? "mobile-view" : "navbar-box"}>
            {navlink.map((links,i) => (
              <Link to={links.url} key={i} data-aos="slide-down">{links.text}</Link>
            ))}
          </div>
          <button className="menu-icon-box" onClick={() => setResposive(!resposive)}>
          <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};
