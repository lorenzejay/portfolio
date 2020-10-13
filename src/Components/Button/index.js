import React, { useContext } from "react";
import "./styles.scss";
import DarkThemeContext from "../../Context/Theme";

function Button({ children, handleClick }) {
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;

  return (
    <button
      style={{ backgroundColor: darkThemeActive ? "#c71f5c" : "#c71f5c", color: "white" }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
