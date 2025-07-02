import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/m%C3%A1rcio-jorge-417aa127a/",
    icon: FaLinkedin,
    alt: "Ícone do LinkedIn",
  },
  {
    id: "email",
    href: "#emailTo",
    icon: MdEmail,
    alt: "Ícone do E-mail",
  },
  {
    id: "whatsapp",
    href: "https://wa.me/5585985603089?text=Olá, vim pelo seu porfólio!",
    icon: IoLogoWhatsapp,
    alt: "Ícone do Whatsapp",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/jorge.developer/",
    icon: AiFillInstagram,
    alt: "Ícone do Instagram",
  },
  {
    id: "github",
    href: "https://github.com/MarcioJorgeMelo",
    icon: FaGithub,
    alt: "Ícone do Github",
  },
];
