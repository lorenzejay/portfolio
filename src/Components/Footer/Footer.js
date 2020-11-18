import React, { useContext } from "react";
import DarkThemeContext from "../../Context/Theme";
import "./styles.scss";

function Footer() {
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: darkThemeActive ? "#171F24" : "white",
        color: darkThemeActive ? "white" : "black",
      }}
    >
      <h2>Contact</h2>
      <p>
        <a style={{ color: "white" }} href="mailto:lorenzejay@gmail.com">
          Email me here: lorenzejay@gmail.com
        </a>
      </p>

      <div className="contact-links">
        <a href="https://github.com/lorenzejay" className="github-link">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/lorenze-hernandez-93aab3175/"
          className="linkedIn-link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
