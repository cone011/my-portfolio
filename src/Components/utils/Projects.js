import PORTFOLIO_IMG from "../../Assets/Projects/portfolio.png";
import POKEDEX from "../../Assets/Projects/pokedex.png";

export const POKEMON_APP = Object.freeze({
  id: 1,
  description: `This project is base on the pokemon api.\n
                A brief explanation about this project and How I made it.\n 
                First of all is made it with React JS, JavaScript and for the style I use CSS but with Modules Stylesheet\n
                I'll leave my Github repository if you like feel to used it or take a look around. Also I attached a Dockerfile if you wanna use a container\n
                and in my repository there is a link to vercel service`,
  name: "Pokemon App",
  technology: "ReactJS, JavaScript, HTML, CSS",
  frontEnd: "https://github.com/cone011/pokemon-app",
  image: POKEDEX,
});

export const FAKE_ECOMMERCE = Object.freeze({
  id: 2,
  name: "Ecommerce Fake",
  description: `A brief introduction of this project I'll attached two links, the first one is the ForntEnd and the second one is the BackEnd.\n
                I'll start with the Back-end, for made this part I use Node JS, for validation I use ExpressJS, also JsonWebToken for the User Authentication.\n
                As my Database I use a NoSQL Database which is MongoDB and the pattern design I use is it MVC(Model-View-Controller).\n
                The front-end I use React JS, Javascript and for the style I use CSS but with Modules Stylesheet\n
                And for the products I use the mercado libre API, and some features like the payment and the card.\n`,
  technology:
    "ReactJS, JavaScript, HTML, CSS, ExpressJS, NodeJS, MongoDB, JsonWebToken, Docker",
  frontEnd: "https://github.com/cone011/producto-front-end",
  backEnd: "https://github.com/cone011/producto-backend",
  image: PORTFOLIO_IMG,
});

export const RETROSPECTIVE = Object.freeze({
  id: 3,
  name: "Retrospective App",
  description: `This project is base one a Sprint application\n
                For this project like the last one I also attached two links, the first one is the FrontEnd and the second one is the BackEnd.\n
                I'll go with the back first, I made it with Node JS, for validation ExpressJS, for the User Authentication I use JsonWebToken\n
                for the database I use a NoSQL Database which is MongoDB and a additional I use SokcetIO for some controllers\n
                and the pattern design I use is it MVC(Model-View-Controller).\n
                For the FrontEnd I use ReactJS, JavaScript and for the style I use CSS but with Modules Stylesheet\n
                Also the front have Auth and SignUp and search data.\n
                An Observation I'll attached in both the back and front a Dockerfile if you wanna use it in a cointaner`,
  technology:
    "ReactJS, JavaScript, HTML, CSS, ExpressJS, NodeJS, MongoDB, Socket.io, JsonWebToken, Docker",
  frontEnd: "https://github.com/cone011/retrospective-front",
  backEnd: "https://github.com/cone011/retrospective-back",
  image: PORTFOLIO_IMG,
});

export const PORTFOLIO = Object.freeze({
  id: 4,
  name: "Portfolio",
  description: `This project as you can see is my current portfolio.\n
                A brief explanation about this project.\n 
                Which is made it with React JS, JavaScript and in this case for the style I use styled components\n
                I'll leave my Github repository if you like feel to used it or take a look around. Also I attached a Dockerfile if you wanna use a container\n`,
  technology: "ReactJS, JavaScript, HTML, CSS, Docker",
  frontEnd: "https://github.com/cone011/my-portfolio",
  image: PORTFOLIO_IMG,
});
