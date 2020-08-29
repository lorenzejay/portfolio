import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Facebook } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <h3>Made by: Lorenze Jay</h3>
      <p>Lorenzejay@gmail.com</p>
      <div>
        <FontAwesomeIcon icon={"facebook-messenger"} style={{ color: "black" }} />
      </div>
      <a href="https://github.com/lorenzejay">Github</a>
    </footer>
  );
}

export default Footer;
