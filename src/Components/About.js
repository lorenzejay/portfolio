import React from "react";
import ProfileImage from "./Images/DSC02193.jpg";
import javaScriptImg from "./Images/js.png";
import reactImg from "./Images/react.png";
import sassImg from "./Images/sass.png";
import nodeImg from "./Images/nodejs.png";
import profileImg2 from "./Images/lorenze-portfile.jpg";

function About() {
  return (
    <section>
      <h3 className="section-title" id="about">
        About.
      </h3>
      <div className="about-flex-content">
        <div className="about-text-container">
          <p>You can call me Lorenze Jay.</p>
          <p>
            I enjoy creating anything that lives in the internet like websites, applications or
            anything technology related. My goal is to build products that fit everyone's needs.
          </p>
          <p>I am self-taught, driven, and willing to learn from others.</p>
          <p>Technologies I use to build my projects are :</p>
          <div className="technology-list">
            <ul className="about-technologies">
              <li>
                <img src={javaScriptImg} style={{ width: 60 }} />
              </li>
              <li>
                <img src={reactImg} style={{ width: 60 }} />
              </li>
              <li>
                <img src={sassImg} style={{ width: 60 }} />
              </li>
              <li>
                <img src={nodeImg} style={{ width: 60 }} />
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
