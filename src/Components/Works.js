import React, { useState } from "react";
import Covid19Project from "./Images/screencapture-file-C-Users-HP-Desktop-Personal-Projects-covid-19-API-index-html-2020-07-28-21_42_43.png";
import BMIProject from "./Images/bmi-calculator-app.png";
import todoApp from "./Images/screencapture-lorenzejay-github-io-todo-list-2020-07-28-21_26_22.png";
import EntryApp from "./Images/Entry-Dark-App.png";

function Works() {
  const [workContent, setWorkContent] = useState([
    {
      img: Covid19Project,
      title: "Covid-19 Live Data",
      text1:
        "Project using Covid-19 Data API to list out total cases, total deaths, and total recovered.",
      text2: "You can see results from 186 countries. Values update on a daily basis.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://github.com/lorenzejay/Covid-19-Live-Data",
    },
    {
      img: EntryApp,
      title: "Entry",
      text1: "This is a sticky notes based app.",
      text2:
        "Features include CRUD styled application that stores users notes. Users can also change background color. Setting feature also allows for a dark theme look as well. Implementation of local storage is included. ",
      technologies: ["React", "CSS"],
      projectLink: "https://github.com/lorenzejay/Entry",
    },
    {
      img: todoApp,
      title: "Minimalistic To Do Application ",
      text1: "Crud based Application utlizing only vanilla Javascript.",
      text2:
        "Additional Features include settings where users can change from light to dark theme.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://github.com/lorenzejay/todo-list",
    },
    {
      img: BMIProject,
      title: "Body Mass Index App",
      text1: "Implmentation of input values parallel to skills learned in forms.",
      text2:
        "Use this to check your body mass index, following the guidelines used by reputable sites like NHLBI.NIH or the CDC.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://github.com/lorenzejay/bmi-calculator",
    },
  ]);

  const workContainer = workContent.map((item) => {
    return (
      <div className="works-flex-row" key={item.title}>
        <a target="_blank" href={item.projectLink}>
          <img className="works-img" src={item.img} />
        </a>
        <div>
          <h2 className="works-title">{item.title}</h2>
          <p className="works-description">{item.text1}</p>
          <p className="works-description">{item.text2}</p>
          <div className="works-technologies">
            <p>Built with: {item.technologies.join(" ")}</p>
            <a className="works-links" href={item.projectLink}>
              Github
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="works-flex-column">{workContainer}</div>;
}

export default Works;
