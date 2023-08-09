import Facebook from "../Components/assets/Icons/facebook.png";
import Github from "../Components/assets/Icons/github.png";
import Twitter from "../Components/assets/Icons/twitter.png";
import Linkedin from "../Components/assets/Icons/linkedin.png";
import Discord from "../Components/assets/Icons/discord.png";
import POKEMONAPP from "../Components/assets/Projects/pokedex.png";
import PORTFOLIO from "../Components/assets/Projects/Portofolio.jpg";
import CERTIFICATE from "../Components/assets/Make It Real - Bootcamp Desarrollo Web Full Stack - Juan Jose Caimen Cespedes.pdf";
import RETRO from "../Components/assets/Projects/RetrospectiveData.png";
import FAKECOMMER from "../Components/assets/Projects/Fakecommer.png";

export const SocialData = [
  Object.freeze({
    id: 0,
    platform: "Github",
    icon: Github,
    link: "https://github.com/cone011",
  }),
  Object.freeze({
    id: 1,
    platform: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/juan-caimen-64b6a7173",
  }),
  Object.freeze({
    id: 2,
    platform: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/coneIlManco",
  }),
  Object.freeze({
    id: 3,
    platform: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/juan.caimen",
  }),
  Object.freeze({
    id: 4,
    plataform: "Discord",
    icon: Discord,
    link: "https://discordapp.com/users/cone#2775",
  }),
];

export const ProjectList = [
  Object.freeze({
    id: 0,
    title: "Pokemon App",
    about: `
      This project is base on the pokemon api.
      A brief explanation about this project and How I made it. 
      First of all is made it with React JS, JavaScript and for the style I use CSS but with Modules Stylesheet
      I'll leave my Github repository if you like feel to used it or take a look around. Also I attached a Dockerfile if you wanna use a container
      and in my repository there is a link to vercel service`,
    tags: ["ReactJS", "Application Web Design", "API", "Web Development"],
    demo: "https://github.com/ThantZinPhyo-Slark/Application-Web-Design",
    frontEnd: "https://github.com/cone011/pokemon-app",
    image: POKEMONAPP,
  }),
  Object.freeze({
    id: 1,
    title: "Ecommerce Fake",
    about: `A brief introduction of this project I'll attached two links, the first one is the ForntEnd and the second one is the BackEnd.
    I'll start with the Back-end, for made this part I use Node JS, for validation I use ExpressJS, also JsonWebToken for the User Authentication.
    As my Database I use a NoSQL Database which is MongoDB and the pattern design I use is it MVC(Model-View-Controller).
    The front-end I use React JS, Javascript and for the style I use CSS but with Modules Stylesheet
    And for the products I use the mercado libre API, and some features like the payment and the card.`,
    tags: [
      "ReactJS",
      "HTML",
      "CSS",
      "API",
      "Web Development",
      "NodeJS",
      "ExpressJS",
      "JWT",
      "MVC",
      "MongoDB",
      "Docker",
    ],
    frontEnd: "https://github.com/cone011/producto-front-end",
    backEnd: "https://github.com/cone011/producto-backend",
    image: FAKECOMMER,
  }),
  Object.freeze({
    id: 2,
    title: "Retrospective App",
    about: `This project is base one a Sprint application\n
    For this project like the last one I also attached two links, the first one is the FrontEnd and the second one is the BackEnd.
    I'll go with the back first, I made it with Node JS, for validation ExpressJS, for the User Authentication I use JsonWebToken
    for the database I use a NoSQL Database which is MongoDB and a additional I use SokcetIO for some controllers
    and the pattern design I use is it MVC (Model-View-Controller).
    For the FrontEnd I use ReactJS, JavaScript and for the style I use CSS but with Modules Stylesheet
    Also the front have Auth and SignUp and search data.
    An Observation I'll attached in both the back and front a Dockerfile if you wanna use it in a cointaner`,
    tags: [
      "ReactJS",
      "HTML",
      "CSS",
      "Application Web Design",
      "API",
      "Web Development",
      "NodeJS",
      "ExpressJS",
      "JWT",
      "MVC",
      "MongoDB",
      "Docker",
      "Socket.IO",
    ],
    frontEnd: "https://github.com/cone011/retrospective-front",
    backEnd: "https://github.com/cone011/retrospective-back",
    image: RETRO,
  }),
  Object.freeze({
    id: 3,
    title: "Portfolio",
    about: `This project as you can see is my current portfolio.
            A brief explanation about this project.
            Which is made it with React JS, JavaScript and in this case for the style I use styled components
            I'll leave my Github repository if you like feel to used it or take a look around. Also I attached a Dockerfile if you wanna use a container`,
    tags: ["ReactJS", "HTML", "CSS", "Web Development", "Socket.IO"],
    demo: "https://github.com/ThantZinPhyo-Slark/always-illest",
    github: "https://github.com/ThantZinPhyo-Slark/always-illest",
    frontEnd: "https://github.com/cone011/my-portfolio",
    image: PORTFOLIO,
  }),
];

export const SkillsData = [
  Object.freeze({
    id: 0,
    type: "Web-Development",
    list: [
      {
        name: "ReactJS",
        icon: <i class="devicon-react-original colored"></i>,
      },
      { name: "Redux", icon: <i class="devicon-redux-original colored"></i> },
      {
        name: "Next.JS",
        icon: <i class="devicon-nextjs-original colored"></i>,
      },
      {
        name: "HTML5",
        icon: <i class="devicon-html5-plain colored"></i>,
      },
      {
        name: "CSS3",
        icon: <i class="devicon-css3-plain colored"></i>,
      },
      {
        name: "JavaScript",
        icon: <i class="devicon-javascript-plain colored"></i>,
      },
      { name: "Node Js", icon: <i class="devicon-nodejs-plain colored"></i> },
      {
        name: "Express JS",
        icon: <i class="devicon-express-original colored"></i>,
      },
      {
        name: "Socket.io",
        icon: <i class="devicon-socketio-original colored"></i>,
      },
      {
        name: "React Native",
        icon: <i class="devicon-android-plain colored"></i>,
      },
      { name: "C#", icon: <i class="devicon-csharp-plain colored"></i> },
    ],
  }),
  Object.freeze({
    id: 1,
    type: "Database",
    list: [
      { name: "Mongo DB", icon: <i class="devicon-mongodb-plain colored"></i> },
      { name: "MySQL", icon: <i class="devicon-mysql-plain colored"></i> },
      {
        name: "SQL Server",
        icon: <i class="devicon-microsoftsqlserver-plain-wordmark"></i>,
      },
    ],
  }),
  Object.freeze({
    id: 2,
    type: "Cloud & Linux",
    list: [
      {
        name: "Docker",
        icon: <i class="devicon-docker-plain colored"></i>,
      },
      {
        name: "Git",
        icon: <i class="devicon-git-plain colored"></i>,
      },
      {
        name: "Ubuntu",
        icon: <i class="devicon-ubuntu-plain colored"></i>,
      },
      {
        name: "Bash",
        icon: <i class="devicon-bash-plain colored"></i>,
      },
    ],
  }),
];

export const CertificateData = [
  Object.freeze({
    id: 0,
    name: "React Complete Course",
    type: "Web Development/Front-End",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-cc8bcddd-c106-4af8-9954-c0af6252cd41.jpg?v=1662604391000",
  }),
  Object.freeze({
    id: 1,
    name: "NodeJS Complete Course",
    type: "Web Development/Back-End",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-c9a79c10-593f-4dc8-a814-5ae33d203b1a.jpg?v=1661003518000",
  }),
  Object.freeze({
    id: 2,
    name: "JavaScript Algorithms and Data Structures",
    type: "Programming",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-66f45c5c-c791-40f2-82da-0a42f4d278cf.jpg?v=1680654132000",
  }),
  Object.freeze({
    id: 3,
    name: "React Native and Redux Course using hooks",
    type: "Mobile",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f7f9539e-767c-455c-8a83-8596115415eb.jpg?v=1666098400000",
  }),
  Object.freeze({
    id: 4,
    name: "MongoDB - The Complete Developer Guide",
    type: "DataBase",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-17ad005c-62d8-4e09-8792-69291ed5a0c3.jpg?v=1685759520000",
  }),
  Object.freeze({
    id: 5,
    name: "Make it Real Bootcamp",
    type: "Bootcamp FullStack",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI79SZyxNPEXUHbgU_rE3tvNKc59qrxCcp2Q6PNlFerusQu_VTK1OxqW72T9Nt8og_F3s&usqp=CAU",
    link: CERTIFICATE,
  }),
  Object.freeze({
    id: 6,
    name: "Bachelor Degree in Computer Science",
    type: "University",
    companyLogo:
      "https://pbs.twimg.com/profile_images/1664144987116691456/OOm1GE2i_400x400.jpg",
  }),
  Object.freeze({
    id: 7,
    name: "Postgraduate Degree in Software Engineer",
    type: "University - Currently in process",
    companyLogo:
      "https://pbs.twimg.com/profile_images/1664144987116691456/OOm1GE2i_400x400.jpg",
  }),
];

export const WokrExpirience = [
  Object.freeze({
    id: 0,
    companyName: "Py Comunicaciones",
    idClass: "unpair",
    date: "May 2022 - present",
    role: "Full Stack Developer / Data Analyst",
  }),
  Object.freeze({
    id: 1,
    companyName: "INFOZOOM S.R.L.",
    idClass: "pair",
    date: "Fer 2019 - May 2022",
    role: "Full Staock Developer",
  }),
  Object.freeze({
    id: 2,
    companyName: "KEMSA CISA",
    idClass: "unpair",
    date: "Fer 2018 - Fer 2019",
    role: "Developer",
  }),
  Object.freeze({
    id: 3,
    companyName: "INFOZOOM S.R.L. ",
    idClass: "pair",
    date: "Nov 2013 - Fer 2017",
    role: "Junior Developer / IT Support",
  }),
];
