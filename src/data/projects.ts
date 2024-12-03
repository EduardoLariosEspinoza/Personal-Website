import { Project } from "../types";
import PersonalImg from "../assets/images/Personal-Website.jpeg";
import FlagImg from "../assets/images/Flag-Trivia-Game-Web-Page-Image.jpeg";
import UniRegImg from "../assets/images/University-Registration-Website-Img.jpeg";
import VetFullStackImg from "../assets/images/Full-Stack-Veterinarian-Website-Img.jpeg";
import LoanVueImg from "../assets/images/Loan-quoter-with-Vue-Img.jpeg";
import VetReactImg from "../assets/images/Vet-Page-React.jpeg";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive website portfolio that was developed with React.js and TypeScript. The styles were added with the Styled-Components tool. It highlights my most relevant skills and projects.",
    img: PersonalImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/Personal-Website"],
    webUrl: "",
    isAvailable: true,
  },
  {
    title: "Flag Trivia Game Web Page",
    description:
      "This is a responsive web application created with React.js and JavaScript. It uses an API to get data about flags and countries, the API calls are managed by Axios. In this app, you will get a country name and four flags, so you must choose the correct answer.",
    img: FlagImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/flag-guess-react"],
    webUrl: "https://ephemeral-dasik-253fa8.netlify.app/",
    isAvailable: true,
  },
  {
    title: "University Registration Website",
    description:
      "Website project for the registration and identification of students with disabilities at the University of Colima. A JS Vanilla, HTML, CSS, PHP, MySQL and Apache based portal web that has the intention of being a helpful tool to identify the students of the university that have a disability. This website have verification, roles, a form and reports of the data of the answers.",
    img: UniRegImg,
    repoUrl: [""],
    webUrl: "",
    isAvailable: false,
  },
  {
    title: "Full Stack Veterinarian Website",
    description:
      "This is a website that imitates a veterinarian's site, where you can register your pet for an appointment or where a veterinarian can see their patients. It was developed with Node.js, React.js, MongoDB, Tailwind, and Express. It uses email registration with MailTrap.",
    img: VetFullStackImg,
    repoUrl: [
      "https://github.com/EduardoLariosEspinoza/apv-frontend",
      "https://github.com/EduardoLariosEspinoza/apv-backend",
    ],
    webUrl: "https://apv-frontend-i8vy.vercel.app/",
    isAvailable: true,
  },
  {
    title: "Loan quoter with Vue.js",
    description:
      "This project receives the information about the loan that you want to obtain and the number of months you want to pay back.",
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
      "TypeScript React project, which simulates a veterinarian page where you can register the information about you, your pet, and the appointment.",
    img: VetReactImg,
    repoUrl: ["https://github.com/EduardoLariosEspinoza/admin-pacientes-ts"],
    webUrl: "https://graceful-truffle-029a4b.netlify.app/",
    isAvailable: true,
  },
];
