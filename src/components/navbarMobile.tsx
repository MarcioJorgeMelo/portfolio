import { BriefcaseBusiness, House, Layers } from "lucide-react";
import { BiMailSend } from "react-icons/bi";
import { RxInfoCircled } from "react-icons/rx";

const NavbarMobile = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-dark-background z-50 px-6 py-3.5 flex gap-6 items-center justify-between border-t border-[#2D343F]">
      <a
        href="#presentation"
        className="text-secondary-blue w-[57px] flex flex-col items-center justify-center gap-1.5"
      >
        <House size={32} />

        <p className="text-[10px]">Início</p>
      </a>

      <a
        href="#experience"
        className="text-white w-[57px] flex flex-col items-center justify-center gap-1.5"
      >
        <BriefcaseBusiness size={32} />

        <p className="text-[10px]">Experiência</p>
      </a>

      <a
        href="#projects"
        className="text-white w-[57px] flex flex-col items-center justify-center gap-1.5"
      >
        <Layers size={32} />

        <p className="text-[10px]">Projetos</p>
      </a>

      <a
        href="#about"
        className="text-white w-[57px] flex flex-col items-center justify-center gap-1.5"
      >
        <RxInfoCircled size={32} />

        <p className="text-[10px]">Sobre</p>
      </a>

      <a
        href="#contact"
        className="text-white w-[57px] flex flex-col items-center justify-center gap-1.5"
      >
        <BiMailSend size={32} />

        <p className="text-[10px]">Contato</p>
      </a>
    </nav>
  );
};

export default NavbarMobile;
