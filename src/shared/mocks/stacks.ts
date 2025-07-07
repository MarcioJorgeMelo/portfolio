import figmaIcon from "../../../public/Figma.png";
import javascriptIcon from "../../../public/JavaScript.png";
import typescriptIcon from "../../../public/TypeScript.png";
import htmlIcon from "../../../public/Html 5.png";
import cssIcon from "../../../public/CSS3.png";
import sassIcon from "../../../public/Sass.png";
import reactIcon from "../../../public/React.png";
import NextIcon from "../../../public/Next.js.png";
import tailwindIcon from "../../../public/Tailwindcss.png";
import bitbucketIcon from "../../../public/Bitbucket.png";
import githubIcon from "../../../public/Github-oficial.png";
import jestIcon from "../../../public/Jest.png";
import nodeIcon from "../../../public/Nodejs.png";
import expressIcon from "../../../public/ExpressJs.png";
import postgresIcon from "../../../public/PostgreSQL.png";
import mongoIcon from "../../../public/MongoDb.png";
import firebaseIcon from "../../../public/Firebase.png";
import clickupIcon from "../../../public/ClickUp.png";
import dockerIcon from "../../../public/Docker.png";
import gitIcon from "../../../public/Git.png";
import { StaticImageData } from "next/image";

interface StackProps {
  icon: StaticImageData;
  name: string;
  alt: string;
}

export const stacks: StackProps[] = [
  {
    icon: reactIcon,
    name: "React",
    alt: "Ícone do React",
  },
  {
    icon: NextIcon,
    name: "Next.js",
    alt: "Ícone do Next.js",
  },
  {
    icon: typescriptIcon,
    name: "TypeScript",
    alt: "Ícone do TypeScript",
  },
  {
    icon: figmaIcon,
    name: "Figma",
    alt: "Ícone do Figma",
  },
  {
    icon: tailwindIcon,
    name: "TailwindCSS",
    alt: "Ícone do Tailwind CSS",
  },
  {
    icon: sassIcon,
    name: "Sass",
    alt: "Ícone do Sass",
  },
  {
    icon: cssIcon,
    name: "CSS",
    alt: "Ícone do CSS",
  },
  {
    icon: javascriptIcon,
    name: "JavaScript",
    alt: "Ícone do JavaScript",
  },
  {
    icon: htmlIcon,
    name: "HTML",
    alt: "Ícone do HTML",
  },
  {
    icon: jestIcon,
    name: "Jest",
    alt: "Ícone do Jest",
  },
  {
    icon: nodeIcon,
    name: "Node.js",
    alt: "Ícone do Node.js",
  },
  {
    icon: expressIcon,
    name: "Express",
    alt: "Ícone do Express",
  },
  {
    icon: firebaseIcon,
    name: "Firebase",
    alt: "Ícone do Firebase",
  },
  {
    icon: mongoIcon,
    name: "MongoDB",
    alt: "Ícone do MongoDB",
  },
  {
    icon: postgresIcon,
    name: "PostgreSQL",
    alt: "Ícone do PostgreSQL",
  },
  {
    icon: gitIcon,
    name: "Git",
    alt: "Ícone do Git",
  },
  {
    icon: dockerIcon,
    name: "Docker",
    alt: "Ícone do Docker",
  },
  {
    icon: bitbucketIcon,
    name: "Bitbucket",
    alt: "Ícone do Bitbucket",
  },
  {
    icon: clickupIcon,
    name: "ClickUp",
    alt: "Ícone do ClickUp",
  },
  {
    icon: githubIcon,
    name: "Github",
    alt: "Ícone do Github",
  },
];
