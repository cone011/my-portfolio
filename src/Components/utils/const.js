import {
  BACHELOR_NACIONAL,
  DIPLOMA_SCHOOL,
  POSGRADUATE_NACIONAL,
} from "./AcademyExperience";

import {
  FAKE_ECOMMERCE,
  POKEMON_APP,
  PORTFOLIO,
  RETROSPECTIVE,
} from "./Projects";

import {
  NODEJS,
  REACTJS,
  CSSTECH,
  HTMLTECH,
  JAVASCRIPT,
  CSHARP,
  EXPRESSJS,
  SOCKETIO,
  MONGODB,
  MYSQL,
  SQLSERVER,
  GIT,
  DOCKER,
  VBNET,
} from "./Technologies";

import {
  INFOZOOM,
  INFOZOOMJR,
  KEMSA,
  PYCOMUNICACIONES,
} from "./WorkExperience";

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

export const NAVIGATION = Object.freeze({
  path: "navigation",
  name: "Navigation",
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

export const TYPE_SHOW_TECH = Object.freeze({
  CARROUSEL: "CARROUSEL",
  ROW: "ROW",
});

export const MENU_ITEMS = [HOME, ABOUT_ME, TECHNOLOGY, ROAD_MAP_WORK];

export const TYPE_CARROUSEL = Object.freeze({
  INITIAL: "INITIAL",
  PROJECTS: "PROJECTS",
  TECHNOLOGY: "TECHNOLOGY",
});

export const ACADEMY_EXPERIENCE = [
  POSGRADUATE_NACIONAL,
  BACHELOR_NACIONAL,
  DIPLOMA_SCHOOL,
];

export const WORK_EXPERIENCE = [PYCOMUNICACIONES, INFOZOOM, KEMSA, INFOZOOMJR];

export const TECH_EXPERIENCE = [
  REACTJS,
  NODEJS,
  CSSTECH,
  HTMLTECH,
  JAVASCRIPT,
  CSHARP,
  EXPRESSJS,
  SOCKETIO,
  MONGODB,
  MYSQL,
  SQLSERVER,
  GIT,
  DOCKER,
  VBNET,
];

export const PROJECTS_LIST = [
  POKEMON_APP,
  FAKE_ECOMMERCE,
  RETROSPECTIVE,
  PORTFOLIO,
];
