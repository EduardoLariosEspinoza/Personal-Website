import { Project } from "../types";
import PersonalImg from "../assets/images/Personal-Website.jpeg";
import FlagImg from "../assets/images/Flag-Trivia-Game-Web-Page-Image.jpeg";
import UniRegImg from "../assets/images/University-Registration-Website-Img.jpeg";
import NotesFullStackImg from "../assets/images/Notes-Page-Img.jpeg";
import LoanVueImg from "../assets/images/Loan-quoter-with-Vue-Img.jpeg";
import VetReactImg from "../assets/images/Vet-Page-React.jpeg";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website designed and developed using React.js and TypeScript, with styling implemented through the Styled-Components library. The site showcases my key technical skills and highlights a selection of my most significant projects.",
    img: PersonalImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/Personal-Website"],
    webUrl: "",
    isAvailable: true,
  },
  {
    title: "Flag Trivia Game Web Page",
    description:
      "This responsive web application was developed using React.js and JavaScript. It integrates with an API to retrieve information about countries and their flags, with API requests efficiently managed through Axios. The application presents a country name along with four flag options, challenging users to select the correct match.",
    img: FlagImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/flag-guess-react"],
    webUrl: "https://ephemeral-dasik-253fa8.netlify.app/",
    isAvailable: true,
  },
  {
    title: "University Registration Website",
    description:
      "This project is a web-based portal designed for the registration and identification of students with disabilities at the University of Colima. Built using Vanilla JavaScript, HTML, CSS, PHP, MySQL, and Apache, the platform serves as a valuable tool to assist the university in identifying and supporting students with disabilities. The website includes features such as user authentication, role management, dynamic forms, and comprehensive data reporting based on user responses.",
    img: UniRegImg,
    repoUrl: [""],
    webUrl: "",
    isAvailable: false,
  },
  {
    title: "Full Stack Notes Website",
    description:
      "This project is a full-stack web application that simulates a notes platform. It allows you to view, create, edit, delete, and archive/unarchive notes. It has two views: archived notes and unarchived notes. The application uses React.js, Node.js, MySQL, and Tailwind. You can start it by executing a script file in its GitHub repo.",
    img: NotesFullStackImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/FullStack-Notes-Page"],
    webUrl: "",
    isAvailable: true,
  },
  {
    title: "Loan quoter with Vue.js",
    description:
      "This Vue.js project is designed to collect and process information regarding loan applications, including the desired loan amount and the repayment period in months.",
    img: LoanVueImg,
    repoUrl: [
      "https://github.com/EduardoLariosEspinoza/cotizador-prestamos-vue",
    ],
    webUrl: "https://cotizador-prestamos-vue-eduardo.netlify.app/",
    isAvailable: true,
  },
  {
    title: "React.js Veterinarian Website",
    description:
      "A TypeScript and React-based project that simulates a veterinary clinic platform, allowing users to register and edit their information, input pet details, and schedule appointments.",
    img: VetReactImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/admin-pacientes-ts"],
    webUrl: "https://graceful-truffle-029a4b.netlify.app/",
    isAvailable: true,
  },
];
