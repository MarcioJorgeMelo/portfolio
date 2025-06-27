import { BriefcaseBusiness, House, Layers } from "lucide-react";
import { BiMailSend } from "react-icons/bi";
import { RxInfoCircled } from "react-icons/rx";

export const navbarOptions = [
  { href: "#presentation", id: "presentation", label: "Início", icon: House },
  {
    href: "#experience",
    id: "experience",
    label: "Experiência",
    icon: BriefcaseBusiness,
  },
  { href: "#projects", id: "projects", label: "Projetos", icon: Layers },
  { href: "#about", id: "about", label: "Sobre", icon: RxInfoCircled },
  { href: "#contact", id: "contact", label: "Contato", icon: BiMailSend },
];
