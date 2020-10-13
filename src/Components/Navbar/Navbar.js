import React, { useState, useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";
import DarkThemeContext from "../../Context/Theme";
import "./styles.scss";
import Typist from "react-typist";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [addNavActive, setAddNavActive] = useState("nav-links");
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive, setDarkThemeActive } = darkTheme;

  const handleClick = () => {
    setNavActive(!navActive);
    if (navActive) {
      setAddNavActive("nav-links nav-active");
    } else {
      setAddNavActive("nav-links");
    }
  };

  return (
    <nav
      style={{
        backgroundColor: darkThemeActive ? "#262833" : "262833",
      }}
    >
      <Typist className="animated-logo">
        <h1 className="logo" style={{ color: darkThemeActive ? "white" : "#333333" }}>
          Lorenze Jay
        </h1>
      </Typist>

      <ul
        className={navActive ? "nav-links nav-active" : "nav-links"}
        style={{ color: darkThemeActive ? "white" : "#333333" }}
      >
        <li>
          <a href="#" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: "white" }}>
            About
          </a>
        </li>
        <li>
          <a href="#works" style={{ color: "white" }}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: "white" }}>
            Contact
          </a>
        </li>
        <li style={{ cursor: "pointer" }}>
          {darkThemeActive ? (
            <span onClick={() => setDarkThemeActive(!darkThemeActive)}>
              <BiSun size="24" color={"white"} />
            </span>
          ) : (
            <span onClick={() => setDarkThemeActive(!darkThemeActive)}>
              <FaMoon size="24" color={"white"} />
            </span>
          )}
        </li>
      </ul>
      <div className="burger" onClick={handleClick}>
        <div className="burger-div"></div>
        <div className="burger-div"></div>
        <div className="burger-div"></div>
      </div>
    </nav>
  );
}

export default Navbar;
