import React, { useContext, useState } from "react";
import Covid19Project from "../Images/screencapture-file-C-Users-HP-Desktop-Personal-Projects-covid-19-API-index-html-2020-07-28-21_42_43.png";
import BMIProject from "../Images/bmi-calculator-app.png";
import todoApp from "../Images/screencapture-lorenzejay-github-io-todo-list-2020-07-28-21_26_22.png";
import EntryApp from "../Images/Entry-Dark-App.png";
import weatherApp from "../Images/weather-application.png";
import minimanoteApp from "../Images/minimanote-screenshot.png";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkThemeContext from "../../Context/Theme";

function Works() {
  React.useEffect(() => {
    AOS.init();
  });
  const darkTheme = useContext(DarkThemeContext);
  const { darkThemeActive } = darkTheme;
  const [workContent] = useState([
    // {
    //   img: Covid19Project,
    //   title: "Covid-19 Live Data",
    //   text1:
    //     "Project using Covid-19 Data API to list out total cases, total deaths, and total recovered.",
    //   text2: "You can see results from 186 countries. Values update on a daily basis.",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   projectLink: "https://github.com/lorenzejay/Covid-19-Live-Data",
    //   demoLink: "https://lorenzejay.github.io/Covid-19-Live-Data/",
    // },
    {
      img: minimanoteApp,
      title: "Minimanote",
      text1:
        "A Minimalistic Note Application with various built in features like code-editor, dark-theme, header, todo-checklists and lists.",
      text2: "Integrates Firebase User authentication and database to store notes and images.",
      technologies: ["React", "SCSS", "Firebase, Redux, Redux-sagas, React-Router"],
      projectLink: "https://github.com/lorenzejay/ljaph-minimanote",
      demoLink: "https://ljaph-minimanote.web.app/",
    },

    {
      img: weatherApp,
      title: "Current Weather App",
      text1:
        "Project using the OpenWeather API. I used Node.js to fetch and create a custom API. That custom API is then fetched using axios to make serve in the frontend using React.",
      text2:
        "APP covers the current temperature as well as the current min and max temperatures. It is finally deployed over to Heroku.",
      technologies: ["React", "Node.js", "Axios"],
      projectLink: "https://github.com/lorenzejay/Weather-App",
      demoLink: "https://weather-app-ljaph.herokuapp.com//",
    },
    {
      img: EntryApp,
      title: "Entry",
      text1: "This is a sticky notes based app.",
      text2:
        "Features include CRUD styled application that stores users notes. Users can also change background color. Setting feature also allows for a dark theme look as well. Implementation of local storage is included. ",
      technologies: ["React", "CSS"],
      projectLink: "https://github.com/lorenzejay/Entry",
      demoLink: "https://lorenzejay.github.io/Entry/",
    },
    // {
    //   img: todoApp,
    //   title: "Minimalistic To Do Application ",
    //   text1: "Crud based Application utlizing only vanilla Javascript.",
    //   text2:
    //     "Additional Features include settings where users can change from light to dark theme.",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   projectLink: "https://github.com/lorenzejay/todo-list",
    //   demoLink: "https://lorenzejay.github.io/todo-list/",
    // },
    // {
    //   img: BMIProject,
    //   title: "Body Mass Index App",
    //   text1: "Implmentation of input values parallel to skills learned in forms.",
    //   text2:
    //     "Use this to check your body mass index, following the guidelines used by reputable sites like NHLBI.NIH or the CDC.",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   projectLink: "https://github.com/lorenzejay/bmi-calculator",
    //   demoLink: "https://lorenzejay.github.io/bmi-calculator/",
    // },
  ]);

  const workContainer = workContent.map((item) => {
    return (
      <div className="works-flex-row" key={item.title} data-aos="fade-up" data-aos-duration="2000">
        <a target="_blank" href={item.projectLink}>
          <img className="works-img" src={item.img} />
        </a>
        <div
          className="works-text-container"
          style={{ color: darkThemeActive ? "white" : "black" }}
        >
          <h2 className="works-title">{item.title}</h2>
          <p className="works-description">{item.text1}</p>
          <p className="works-description">{item.text2}</p>
          <div className="works-technologies" style={{ color: darkThemeActive ? "white" : "grey" }}>
            <p>Built with: {item.technologies.join(" ")}</p>
            <div style={{ color: darkThemeActive ? "white" : "black" }}>
              <a
                className="works-links github-link"
                href={item.projectLink}
                style={{ color: darkThemeActive ? "white" : "black" }}
              >
                Github
              </a>
              <a
                className="works-links demo-link"
                href={item.demoLink}
                style={{ color: darkThemeActive ? "white" : "black" }}
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="works" className="works-flex-column">
      {workContainer}
    </div>
  );
}

export default Works;
