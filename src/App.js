import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import DisplayWorks from "./Components/DisplayWorks";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <DisplayWorks />
      <Footer />
    </div>
  );
}

export default App;
