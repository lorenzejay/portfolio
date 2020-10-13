import React, { useState } from "react";
import { DarkThemeProvider } from "../src/Context/Theme";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import DisplayWorks from "./Components/Works/DisplayWorks";
import Footer from "./Components/Footer/Footer";

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(true);
  return (
    <div className="App">
      <DarkThemeProvider value={{ darkThemeActive, setDarkThemeActive }}>
        <Navbar />
        <Main />
        <About />
        <DisplayWorks />
        <Footer />
      </DarkThemeProvider>
    </div>
  );
}

export default App;
