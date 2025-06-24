import { ArrowRight, ChevronDown, FileDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../public/aboutImg.png";
import linkedinIcon from "../../public/LinkedIn.png";
import githubIcon from "../../public/GitHub.png";
import whatsappIcon from "../../public/WhatsApp.png";
import instagramIcon from "../../public/Instagram.png";
import emailIcon from "../../public/Email.png";
import { Button } from "@/components/ui/button";

const Presentation = () => {
  return (
    <section id="#presentation" className="pb-12">
      <aside className="relative h-[450px]">
        <Image
          src={aboutImage}
          alt="Foto pessoal do Márcio Jorge"
          quality={100}
          priority
          fill
          className="object-cover"
        />
      </aside>

      <div className="px-6 pb-12 flex flex-col w-full gap-6">
        <aside className="pt-10 flex flex-col gap-10">
          <div>
            <div className="w-full max-w-[96px] bg-white h-2 mb-6" />
            <h1 className="text-white text-[34px] font-bold mb-3">
              Márcio Jorge, Desenvolvedor Frontend
            </h1>
            <p className="text-[#C6C6C6] text-base font-medium">
              Desenvolvedor Frontend com foco em UI/UX, especialista em
              desenvolver interfaces modernas, intuitivas e de grande impacto.
              Uno criatividade e domínio técnico para transformar ideias em
              experiências digitais que encantam e geram resultados.
            </p>
          </div>
          <Button className="bg-[#0760E2] h-16 w-16 rounded-full flex items-center justify-center">
            <ChevronDown
              className="size-10 animate-bounce"
              strokeWidth={2.5}
              color="#FFF"
            />
          </Button>
        </aside>

        <aside className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-[18px]">
            <h3 className="text-white text-base font-bold">SOBRE MIM</h3>

            <p className="text-[#C6C6C6] text-base font-medium">
              Atuação no time de tecnologia da Livsaúde, desenvolvendo sites e
              sistemas internos com foco em performance e usabilidade.
              Experiência com{" "}
              <span className="font-bold text-white">React</span>,{" "}
              <span className="font-bold text-white">Figma</span> e{" "}
              <span className="font-bold text-white">Electron</span> na criação
              de interfaces.
            </p>

            <div className="w-fit flex items-center gap-3 pb-1.5 text-sm font-bold text-white border-b-[1.5px] border-[#445166]">
              SAIBA MAIS
              <ArrowRight size={16} color="#FFF" />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#2D343F] rounded-full" />

          <div className="w-full flex flex-col gap-[18px]">
            <h3 className="text-white text-base font-bold">MEUS PROJETOS</h3>

            <p className="text-[#C6C6C6] text-base font-medium">
              Atuação no time de tecnologia da Livsaúde, desenvolvendo sites e
              sistemas internos com foco em performance e usabilidade.
              Experiência com{" "}
              <span className="font-bold text-white">React</span>,{" "}
              <span className="font-bold text-white">Figma</span> e{" "}
              <span className="font-bold text-white">Electron</span> na criação
              de interfaces.
            </p>

            <div className="w-fit flex items-center gap-3 pb-1.5 text-sm font-bold text-white border-b-[1.5px] border-[#445166]">
              VER PROJETOS
              <ArrowRight size={16} color="#FFF" />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#2D343F] rounded-full" />

          <div className="w-full flex flex-col gap-[18px]">
            <h3 className="text-white text-base font-bold">ENTRE EM CONTATO</h3>

            <div className="flex gap-5 items-center">
              <Link href="#">
                <Image
                  src={linkedinIcon}
                  alt="Ícone do LinkedIn"
                  height={24}
                  width={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src={githubIcon}
                  alt="Ícone do Github"
                  height={24}
                  width={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src={whatsappIcon}
                  alt="Ícone do Whatsapp"
                  height={24}
                  width={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src={instagramIcon}
                  alt="Ícone do Instagram"
                  height={24}
                  width={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src={emailIcon}
                  alt="Ícone do Email"
                  height={24}
                  width={24}
                />
              </Link>
            </div>

            <Button className="w-fit text-[18px] font-bold bg-[#0760E2] flex items-center gap-3">
              Baixar currículo
              <FileDown className="size-6" />
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Presentation;
