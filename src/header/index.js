import React, { useState } from "react";
import "./style.css";
import { VscGrabber } from "react-icons/vsc";
import { NavLink, Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="fixed-top site__header">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <button
            className="navbar-toggler menu__button nav_ac"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <VscGrabber />
          </button>
          <div className={`collapse navbar-collapse${expanded ? " show" : ""}`}>
            <ul className="navbar-nav ml-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={() => setExpanded(false)}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio" onClick={() => setExpanded(false)}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={() => setExpanded(false)}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={() => setExpanded(false)}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item d-lg-none mt-3">
                <div className="d-flex flex-column">
                  {socialprofils.github && (
                    <a href={socialprofils.github} className="nav-link" target="_blank" rel="noopener noreferrer">Github</a>
                  )}
                  {socialprofils.linkedin && (
                    <a href={socialprofils.linkedin} className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  )}
                </div>
              </li>
            </ul>
            <div className="d-none d-lg-block ml-3">
              <Themetoggle />
            </div>
          </div>
          <div className="d-lg-none ml-2">
            <Themetoggle />
          </div>
        </nav>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
