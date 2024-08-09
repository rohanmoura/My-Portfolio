import html from "../../public/images/tech/html.png";
import css from "../../public/images/tech/css.png";
import javascript from "../../public/images/tech/javascript.png";
import nodejs from "../../public/images/tech/nodejs.png";
import mongodb from "../../public/images/tech/mongodb.png";
import firebase from "../../public/images/tech/firebase.svg";
import postgresql from "../../public/images/tech/postgresql.png";
import reactjs from "../../public/images/tech/reactjs.png";
import tailwind from "../../public/images/tech/tailwind.png";
import next from "../../public/images/tech/next.png";
import figma from "../../public/images/tech/figma.png";
import git from "../../public/images/tech/git.png";
import redux from "../../public/images/tech/redux.png";
import { Work_Sans } from "next/font/google";
import epiceditor from "../../public/images/Image1.png";
import signal from "../../public/images/signal.png";
import codeburst from "../../public/images/codebrust.png";
import NPTELpython from "../../public/images/NPTELpython.jpeg";
import forge from "../../public/images/forge.png";
import AICTE from "../../public/images/AICTE.jpg";
import port from "../../public/images/port.png";
const worksans = Work_Sans({ subsets: ["latin"], weight: ["500"] });

const aboutData =
  "I am a skilled Full Stack Web Developer with expertise in various trending technologies such as React.js, Next.js, MongoDB, etc. I have built projects which showcases the skillset I have in these technologies. I am really good in adapting to the various technological trends and working with the latest technologies. I am open to work as a freelance web developer and help you start or boost your online business with the help of tech.";

const tech = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const projects = [
  {
    thumbnail: epiceditor,
    title: "Epic Editor",
    desc: "Epic Editor is a full-stack application developed with Next.js and advanced real-time features. It allows users to create, share, and collaborate on notes seamlessly. With instant updates and flexible permissions, Epic Editor enhances productivity and teamwork.",
    techUsed: ["Next.js", "Clerk", "Typescript", "Liveblocks"],
    github: "https://github.com/rohanmoura/epic-editor",
    webapp: "https://epic-editor-sigma.vercel.app/",
  },
  {
    thumbnail: signal,
    title: "Signal - Clone",
    desc: "Signal - Clone is a full-stack web application that replicates the core features of the original Signal app. Built to support streaming meetings and real-time chats, this clone provides a seamless communication experience similar to the original, with all the essential functionalities intact.",
    techUsed: ["Next.js", "convex", "clerk", "supabase", "typescipt"],
    github: "https://github.com/rohanmoura/Signal",
    webapp: "https://signal-ashen.vercel.app/",
  },
  {
    thumbnail: port,
    title: "Personal Portfolio Website",
    desc: "This is my Portfolio Website built using Nextjs and Tailwind. This website is SEO optimized as this is built using Next.js server-side rendering. This Professional Portfolio Website displays all the info. ,projects and Achievements with a Contact Section integrated with Nodemailer for mail service.",
    techUsed: ["Next.js", "Tailwind"],
    github: "https://github.com/rohanmoura/My-Portfolio",
    webapp: "https://my-portfolio-i3paqontj-rohans-projects-739caa5d.vercel.app/",
  },
];
const achievements = [
  {
    title: "Placed 1st in Code Burst Hackathon",
    organiser: "Sreyas Institute of Engg. & Tech.",
    date: "October 2023",
    points: [
      "Code Burst is a Coding Contest Organised at Sreyas Institute of Engineering and Technology.",
      "Me and my Team showcased our problem solving skills to come up with the optimal solutions to the problem statements.",
    ],
    img: codeburst,
  },
];

export { aboutData, tech, worksans, projects, achievements };
