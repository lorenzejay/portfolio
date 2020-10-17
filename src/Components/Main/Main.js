import React, { useState, useContext } from "react";
import Modal from "../Modal";
import DarkThemeContext from "../../Context/Theme";
import LorenzeHernandezResumePDF from "./../../Media/Web-Development-Resume.pdf";
import "./styles.scss";

function Main() {
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;

  return (
    <main
      style={{
        backgroundColor: darkThemeActive ? "#171F24" : "white",
        borderBottom: !darkThemeActive && "3px solid #333333",
      }}
    >
      <div className="main-content-container">
        <div>
          <p className="main-intro" style={{ color: darkThemeActive ? "white" : "black" }}>
            👋Hi, my name is
          </p>
        </div>
        <div>
          <h1 className="main-name" style={{ color: darkThemeActive ? "white" : "black" }}>
            Lorenze Jay Hernandez
          </h1>
        </div>
        <div>
          <h3 className="main-saying" style={{ color: darkThemeActive ? "white" : "black" }}>
            Mixing Technology and Creativity
          </h3>
        </div>
        <div>
          <p className="main-description" style={{ color: darkThemeActive ? "#8892b0" : "black" }}>
            I am a Web Developer based in Los Angeles, California specialized in front-web
            development. I can build exceptional websites, applications and everything in between.
          </p>
        </div>
        <Modal modalTitle="📄Resume">
          <embed style={{ height: "100%", width: "100%" }} src={LorenzeHernandezResumePDF}></embed>
        </Modal>
      </div>
    </main>
  );
}

export default Main;
