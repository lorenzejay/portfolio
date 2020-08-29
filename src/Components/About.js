import React from "react";
import ProfileImage from "./Images/DSC02193.jpg";
function About() {
  return (
    <section>
      <h3 className="section-title" id="about">
        About .
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
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Node.JS</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
        <img className="profile-pic" src={ProfileImage} />
      </div>
    </section>
  );
}

export default About;
