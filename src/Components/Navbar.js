import React, { useState } from "react";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [addNavActive, setAddNavActive] = useState("nav-links");
  const handleClick = () => {
    setNavActive(!navActive);
    if (navActive) {
      setAddNavActive("nav-links nav-active");
    } else {
      setAddNavActive("nav-links");
    }
  };
  console.log(addNavActive);
  return (
    <nav>
      <div className="logo">Lorenze Jay</div>
      <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#works">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
