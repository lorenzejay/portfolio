import React from "react";
import Works from "./Works";

function DisplayWorks() {
  return (
    <div id="works" className="works">
      <h3 className="section-title" id="about">
        Works.
      </h3>
      <div data-aos="fade-up" data-aos-duration="3000">
        <Works />
      </div>
    </div>
  );
}

export default DisplayWorks;
