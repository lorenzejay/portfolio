import React, { useContext } from "react";
import Works from "./Works";
import "./styles.scss";
import DarkThemeContext from "../../Context/Theme";

function DisplayWorks() {
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;

  return (
    <div
      id="works"
      className="works"
      style={{
        backgroundColor: darkThemeActive ? "#171F24" : "white",
        borderBottom: darkThemeActive ? "2px solid white" : "2px solid #333333",
      }}
    >
      <div className="section-title">
        <h3 id="about" style={{ backgroundColor: "#4acfac" }}>
          Projects.
        </h3>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <Works />
      </div>
    </div>
  );
}

export default DisplayWorks;
