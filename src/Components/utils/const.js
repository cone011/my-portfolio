import CSharp from "../../Assets/Technologies/C#.svg";
import CSS from "../../Assets/Technologies/CSS.svg";
import Docker from "../../Assets/Technologies/Docker.svg";
import Express from "../../Assets/Technologies/ExpressJS.svg";
import Git from "../../Assets/Technologies/Git.svg";
import HTML from "../../Assets/Technologies/Html.svg";
import JavaScript from "../../Assets/Technologies/JavaScript.svg";
import MongoDB from "../../Assets/Technologies/MongoDB.svg";
import MySQL from "../../Assets/Technologies/MySQL.svg";
import NodeJS from "../../Assets/Technologies/NodeJS.svg";
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

export const TYPE_ROAD_MAP = Object.freeze({
  WORK_EXPERIENCE: "Work Experience",
  ACADEMY_EXPERIENCE: "Academy Experience",
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

export const ROAD_MAP_WORK = Object.freeze({
  path: "roadWork",
  name: "Road Work",
});

export const ROAD_MAP_ACADEMY = Object.freeze({
  path: "roadAcademy",
  name: "Road Academy",
});

export const MENU_ITEMS = [HOME, ABOUT_ME, TECHNOLOGY, ROAD_MAP_WORK];

export const TYPE_CARROUSEL = Object.freeze({
  INITIAL: "INITIAL",
  PROJECTS: "PROJECTS",
});

export const ACADEMY_EXPERIENCE = [
  Object.freeze({
    name: "Posgraduate course Software Engineer 2021 - Present",
    institucion: "Universidad Nacional de Asuncion",
  }),
  Object.freeze({
    name: "Bachelor Degree 2013 - 2018",
    institucion: "Universidad Nacional de Asuncion",
  }),
  Object.freeze({
    name: "Collage Diploma 2000-2011",
    institucion: "Colegio Campoalto",
  }),
];

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
    image: NodeJS,
    rating: 100,
  }),
  Object.freeze({
    id: 3,
    name: "CSS",
    image: CSS,
    rating: 70,
  }),
  Object.freeze({
    id: 4,
    name: "HTML",
    image: HTML,
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
    image: CSharp,
    rating: 85,
  }),
  Object.freeze({
    id: 7,
    name: "Express JS",
    image: Express,
    rating: 90,
  }),
  Object.freeze({
    id: 8,
    name: "Socket IO",
    image: SocketIO,
    rating: 65,
  }),
  Object.freeze({
    id: 9,
    name: "MongDB",
    image: MongoDB,
    rating: 80,
  }),
  Object.freeze({
    id: 10,
    name: "MySQL",
    image: MySQL,
    rating: 90,
  }),
  Object.freeze({
    id: 11,
    name: "SQL Server",
    image: SQLServer,
    rating: 90,
  }),
  Object.freeze({
    id: 12,
    name: "Git",
    image: Git,
    rating: 70,
  }),
  Object.freeze({
    id: 13,
    name: "Docker",
    image: Docker,
    rating: 50,
  }),
  Object.freeze({
    id: 14,
    name: "VB.Net",
    image: VBNet,
    rating: 70,
  }),
];

export const PROJECTS_LIST = [
  Object.freeze({
    id: 1,
    description: "A DESCRIPTION",
    name: "Pokemon App",
    technology: "ReactJS, JavaScript, HTML, CSS",
    frontEnd: "",
    image: "FALTA PONER IMAGEN",
  }),
  Object.freeze({
    id: 2,
    name: "Ecommerce Fake",
    description: "A DESCRIPTION",
    technology:
      "ReactJS, JavaScript, HTML, CSS, ExpressJS, NodeJS, MongoDB, JsonWebToken, Docker",
    frontEnd: "",
    backEnd: "",
    image: "falta poner",
  }),
  Object.freeze({
    id: 3,
    name: "Retrospective App",
    description: "A DESCRIPTION",
    technology:
      "ReactJS, JavaScript, HTML, CSS, ExpressJS, NodeJS, MongoDB, Socket.io, JsonWebToken, Docker",
    frontEnd: "",
    backEnd: "",
    image: "falta poner",
  }),
  Object.freeze({
    id: 4,
    name: "Portfolio",
    description: "A DESCRIPTION",
    technology: "ReactJS, JavaScript, HTML, CSS, Docker",
    frontEnd: "",
    backEnd: "",
    image: "",
  }),
];
