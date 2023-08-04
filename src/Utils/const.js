import Facebook from "../Components/assets/Icons/facebook.png";
import Github from "../Components/assets/Icons/github.png";
import Twitter from "../Components/assets/Icons/twitter.png";
import Linkedin from "../Components/assets/Icons/linkedin.png";

export const SocialData = [
  Object.freeze({
    id: 0,
    platform: "Github",
    icon: Github,
    link: "https://github.com/ThantZinPhyo-Slark",
  }),
  Object.freeze({
    id: 1,
    platform: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/thantzinphyo11/",
  }),
  Object.freeze({
    id: 2,
    platform: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/ThantZinPhyoSLK",
  }),
  Object.freeze({
    id: 3,
    platform: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/thantzin.phyo.18",
  }),
];

export const ProjectList = [
  Object.freeze({
    id: 0,
    title: "Application Web Design",
    about:
      " MyPay Application Landing Page Design Using ( React.Js ), Mypay App is Protected By Our Technical & Ethical Security Procedures.It is an Independent Payment System With Absolutely No Other Influence.",
    tags: ["ReactJS", "Application Web Design", "Payment", "Web Development"],
    demo: "https://github.com/ThantZinPhyo-Slark/Application-Web-Design",
    github: "https://github.com/ThantZinPhyo-Slark/Application-Web-Design",
    image:
      "https://github.com/ThantZinPhyo-Slark/Application-Web-Design/raw/main/home.png",
  }),
  Object.freeze({
    id: 1,
    title: "Google IT Support",
    about:
      " If you go to work regularly, you will get a certificate from Google in more than 2 months. In the Github link, included the answers to the questions in the Google IT Support Course, as well as everything from the Financial Aid Letter to the final CV writing.",
    tags: ["Window", "Linux", "Digital Dark Art", "Networking", "Hardware"],
    demo: "https://github.com/ThantZinPhyo-Slark/Google-IT-Support-Professional",
    github:
      "https://github.com/ThantZinPhyo-Slark/Google-IT-Support-Professional",
    image:
      "https://github.com/ThantZinPhyo-Slark/Google-IT-Support-Professional/raw/main/Certificate.jpg",
  }),
  Object.freeze({
    id: 2,
    title: "Always Illest",
    about:
      " This is a ramdom project I am using Website Design HTML ,CSS, SCSS & JavaScript Responsive AI Esport Page , It is Not Official Website.",
    tags: ["ReactJS", "HTML", "SCSS", "JavaScript", "AI Esport"],
    demo: "https://github.com/ThantZinPhyo-Slark/always-illest",
    github: "https://github.com/ThantZinPhyo-Slark/always-illest",
    image:
      "https://github.com/ThantZinPhyo-Slark/always-illest/raw/main/preview.png",
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
      {
        name: "Tailwind",
        icon: <i class="devicon-tailwindcss-plain colored"></i>,
      },
    ],
  }),
  Object.freeze({
    id: 0,
    type: "Cloud & Linux",
    list: [
      {
        name: "Azure",
        icon: <i class="devicon-azure-plain colored"></i>,
      },
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

export const WorkData = [
  Object.freeze({
    id: 0,
    company: "Google IT Support Certificate",
    designation: "Google IT Support",
    dateJoining: "2022",
    dateEnd: "2023",
    companyLogo:
      "https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png",
    work: "I am proficient in hardware and software troubleshooting , knowledge of operating systems, networking concepts, experience in providing excellent customer service.",
  }),
  Object.freeze({
    id: 1,
    company: "Microsoft Certified: Azure Fundamentals",
    designation: "AZ-900",
    dateJoining: "2022",
    dateEnd: "2023",
    companyLogo:
      "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    work: "I have solid understanding of cloud computing principles and best practices.Familiarity with Azure services such as virtual machines, storage, and networking..",
  }),
  Object.freeze({
    id: 2,
    company: "Security Operations Analyst",
    designation: "SC-200",
    dateJoining: "2022",
    dateEnd: "2023",
    companyLogo:
      "https://images.credly.com/size/340x340/images/7e75516f-5149-4d19-8d09-aa3dab4907cb/security-operations-analyst-associate-600x600.png",
    work: "I proficient in security operations and incident response and experience with threat intelligence and security monitoring using Microsoft security technologies.I have knowledge of governance, risk, and compliance frameworks and practices.",
  }),
  Object.freeze({
    id: 3,
    company: "Azure Administrator Associate",
    designation: "AZ-104",
    dateJoining: "2022",
    dateEnd: "2023",
    companyLogo:
      "https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    work: "I have proficient in managing and maintaining Azure infrastructure and services also experience with Azure virtual machines, storage, networking, and security.I have knowledge of Azure identity and access management, monitoring, and governance.",
  }),
];
