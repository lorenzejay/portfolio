import React, { useContext } from "react";
import profileImg2 from "../../Components/Images/lorenze-portfile.jpg";
import AOS from "aos"; //animate on scroll
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import "./styles.scss";
import DarkThemeContext from "../../Context/Theme";
AOS.init();

function About() {
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;

  return (
    <section style={{ backgroundColor: darkThemeActive ? "#171F24" : "white" }}>
      <div className="section-title">
        <h3 id="about" style={{ color: darkThemeActive ? "white" : "white" }}>
          About.
        </h3>
      </div>
      <div className="about-flex-content" data-aos="fade-up" data-aos-duration="2000">
        <div
          className="about-text-container"
          style={{ color: darkThemeActive ? "white" : "black" }}
        >
          <p>You can call me Lorenze Jay.</p>
          <p>
            My passion revolves around combining creativity and technology. Bring the two worlds
            together and we have Web Development. In this field, I can bring my creativity to the
            internet, by designing and implementing applications and webstes for the entire world to
            see.
          </p>
          <p>
            My journey in Web Development has made me adaptable to complex problems, a more logical
            thinker, and eager to learn from others. I am seeking experiences to develop anything
            that lives on the internet. I would love to connect with you.
          </p>

          <p>Technologies I've use to build my projects include:</p>
          <div className="technology-list">
            <ul className="about-technologies">
              <li>
                <FaJs size="60" color="yellow" />
              </li>
              <li>
                <FaNodeJs size="60" color="green" />
              </li>
              <li>
                <FaReact size="60" color="#61DBFB" />
              </li>
            </ul>
          </div>
        </div>
        <img className="profile-pic" src={profileImg2} />
      </div>
    </section>
  );
}

export default About;
