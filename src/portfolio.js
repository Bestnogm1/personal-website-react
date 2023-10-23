import bookImg from "./image/booksimg.jpg";
import issueTracker from "./image/Image 12-2-22 at 2.41 PM.jpg";
import mutantGamesimg from "./image/mutantGames.jpg";
import resume from "./documents/koffiresume.pdf";

const header = {
  homepage: "/",
  title: "KH.",
};

const about = {
  name: "Koffi Hessou",
  role: "Front End Engineer",
  description:
    "I am a junior software developer. I will ensure the best results through intuitive programming, efficient functionalities, and proper diagnoses of issues in order to ensure swift resolution of problems.",
  resume: resume,
  social: {
    linkedin: "https://www.linkedin.com/in/koffi-hessou-1b532b212/",
    github: "https://github.com/Bestnogm1",
  },
};

const projects = [
  {
    name: "Book Library",
    picture: bookImg,
    description:
      "This application is a dynamic Virtual Book Library that offers users an immersive reading experience. With this platform, users can effortlessly explore a vast collection of books using the Google Books API. They can seamlessly search for their favorite titles, discover new reads, and curate a personal bookshelf, providing a digital haven for their reading aspirations.",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "Google Book API",
      "JWT AUTH",
      "Express",
      "Bootstrap",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Bestnogm1/Book-Library",
    livePreview: "https://astounding-raindrop-a52436.netlify.app/",
  },
  {
    name: "Mutant Games",
    picture: mutantGamesimg,
    description:
      "As a collaborative force within a talented team of four skilled engineers, I had the privilege of contributing to the development of a robust, end-to-end MERN (MongoDB, Express.js, React, Node.js) stack application. Our project was focused on creating and joining video game lobbies, offering an immersive gaming experience for enthusiasts and communities",
    stack: [
      "React",
      "Node.js",
      "Google Book API",
      "JWT AUTH",
      "Express",
      "Bootstrap",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Team-Mutant/Mutant-games-front-end",
    livePreview: "https://superb-faun-c00519.netlify.app/",
  },
  {
    name: "Issue Tracker ",
    picture: issueTracker,
    description:
      "Developed a secure CRUD application with JWT authentication using React, Node.js, and Express. Users can manage tickets collaboratively with features like dragging them between sections for status updates. The application is built with technologies like Select.js, Modal.js, Material UI, and it integrates with MongoDB for data storage",
    stack: [
      "React",
      "Node.js",
      "Select.js",
      "Modal.js",
      "JWT AUTH",
      "Express",
      "Material UI",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Bestnogm1/Issue-Tracker",
    livePreview: "https://scintillating-sherbet-a5313a.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript(ES6)",
  "TypeScript",
  "Python3",
  "Go",
  "HTML5",
  "CSS",
  "Sass/SCSS",
  "Node.js",
  "Express.js",
  "React",
  "Tailwind",
  "AWS",
  "Redux Toolkit",
  "Chakra Ui",
  "Bootstrap",
  "NextJS",
  "StoryBook",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "DOM manipulation",
  "npm",
  "REST APIs",
  "JSON",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
  "CI/CD",
  "Agile/Scrum",
  "Jira",
  "Confluence",
  "AWS",
  "Next-SEO",
  "React Hooks",
  "Figma"
];


const contact = {
  email: "koffiarielhessou@gmail.com",
};

export { header, about, projects, skills, contact };
