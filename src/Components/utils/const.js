import CSharp from "../../Assets/Technologies/C#.svg";
import CSS from "../../Assets/Technologies/CSS.svg";
import Docker from "../../Assets/Technologies/Docker.svg";
import Express from "../../Assets/Technologies/ExpressJS.svg";
import Git from "../../Assets/Technologies/Git.svg";
import HTML from "../../Assets/Technologies/Html.svg";
import JavaScript from "../../Assets/Technologies/JavaScript.svg";
import MongoDB from "../../Assets/Technologies/MongoDB.svg";
import MySQL from "../../Assets/Technologies/MySQL.svg";
import ReactJS from "../../Assets/Technologies/React.svg";
import SocketIO from "../../Assets/Technologies/SocketIO.svg";
import SQLServer from "../../Assets/Technologies/SQLServer.svg";
import VBNet from "../../Assets/Technologies/Vbnet.svg";

export const SOCIAL_MEDIA = Object.freeze({
  FACEBOOK: "FACEBOOK",
  INSTRAGRAM: "INSTAGRAM",
  LINKEDIN: "LINKEDIN",
  TWITTER: "TWITTER",
});

export const TYPE_SHOW_CASE = Object.freeze({
  RUNNING: "running",
  PAUSED: "paused",
});

export const HOME = Object.freeze({
  path: "home",
  name: "Home",
});

export const ABOUT_ME = Object.freeze({
  path: "about",
  name: "About Me",
});

export const TECHNOLOGY = Object.freeze({
  path: "technology",
  name: "Technology",
});

export const MENU_ITEMS = [HOME, ABOUT_ME, TECHNOLOGY];

export const WORK_EXPERIENCE = [
  Object.freeze({
    companyName: "Py Comunicaciones 2022 - present",
    role: "Full Stack Developer / Data Analyst",
  }),
  Object.freeze({
    companyName: "INFOZOOM S.R.L.  2019 - 2022",
    role: "Full Staock Developer",
  }),
  Object.freeze({
    companyName: "KEMSA CISA 2018 - 2019",
    role: "Developer",
  }),
  Object.freeze({
    companyName: "INFOZOOM S.A. 2013-2017",
    role: "Junior Developer / IT Support",
  }),
];

export const TECH_EXPERIENCE = [
  Object.freeze({
    id: 1,
    name: "React JS",
    image: ReactJS,
    rating: 100,
  }),
  Object.freeze({
    id: 2,
    name: "Node JS",
    image: "FALTA",
    rating: 100,
  }),
  Object.freeze({
    id: 3,
    name: "CSS",
    image: "FALTA",
    rating: 70,
  }),
  Object.freeze({
    id: 4,
    name: "HTML",
    image: "falta",
    rating: 75,
  }),
  Object.freeze({
    id: 5,
    name: "JavaScript",
    image: JavaScript,
    rating: 85,
  }),
  Object.freeze({
    id: 6,
    name: "C#",
    image: "falta",
    rating: 85,
  }),
  Object.freeze({
    id: 7,
    name: "Express JS",
    image: "FALTA",
    rating: 90,
  }),
  Object.freeze({
    id: 8,
    name: "Socket IO",
    image: "falta",
    rating: 65,
  }),
  Object.freeze({
    id: 9,
    name: "MongDB",
    image: "falta",
    rating: 80,
  }),
  Object.freeze({
    id: 10,
    name: "MySQL",
    image: "falta",
    rating: 90,
  }),
  Object.freeze({
    id: 11,
    name: "SQL Server",
    image: "falta",
    rating: 90,
  }),
  Object.freeze({
    id: 12,
    name: "Git",
    image: "falta",
    rating: 70,
  }),
];
