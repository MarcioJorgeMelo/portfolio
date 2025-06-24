import {
  BriefcaseBusiness,
  CodeXml,
  House,
  Info,
  SquareCode,
} from "lucide-react";

const NavbarMobile = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#1B1F24] z-50 px-6 h-20 flex gap-6 items-center justify-between border-t border-[#2D343F]">
      <a
        href="#presentation"
        className="text-[#1B98FE] flex flex-1 flex-col items-center gap-1.5"
      >
        <House size={24} />

        <p className="text-[10px]">Início</p>
      </a>

      <a
        href="#experiencia"
        className="text-white flex flex-1 flex-col items-center gap-1.5"
      >
        <BriefcaseBusiness size={24} />

        <p className="text-[10px]">Experiência</p>
      </a>

      <a
        href="#projetos"
        className="text-white flex flex-1 flex-col items-center gap-1.5"
      >
        <SquareCode size={24} />

        <p className="text-[10px]">Projetos</p>
      </a>

      <a
        href="#sobre"
        className="text-white flex flex-1 flex-col items-center gap-1.5"
      >
        <Info size={24} />

        <p className="text-[10px]">Sobre</p>
      </a>

      <a
        href="#contato"
        className="text-white flex flex-1 flex-col items-center gap-1.5"
      >
        <CodeXml size={24} strokeWidth={2.5} />

        <p className="text-[10px]">Contato</p>
      </a>
    </nav>
  );
};

export default NavbarMobile;
