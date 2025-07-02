import CapaExImg from "../../public/capa-ex.png";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import figmaIcon from "../../public/Figma.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-10 px-6 flex flex-col gap-10">
      <aside className="flex flex-col gap-4">
        <div className="w-full max-w-[96px] bg-white h-2" />
        <h1 className="text-white text-xgg font-bold">Projetos</h1>
      </aside>

      <aside className="w-full flex flex-col gap-6">
        <article className="w-full flex justify-between items-center">
          <aside className="px-3 pb-1.5 border-b-[3px] border-primary-blue">
            <h2 className="font-bold text-base ssm:text-lg text-white">Web</h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-base ssm:text-lg text-white">
              Mobile
            </h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-base ssm:text-lg text-white">
              Design
            </h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-base ssm:text-lg text-white">
              Desktop
            </h2>
          </aside>
        </article>

        <article className="w-full flex flex-col gap-10">
          <Card className="w-full overflow-hidden p-0 bg-transparent border-[#3E3F40] rounded-[12px]">
            <CardContent className="p-0">
              <div className="relative h-[220px]">
                <Image
                  src={CapaExImg}
                  alt="Capa de um projeto"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 p-3">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xss font-bold text-white">
                    OdontoPRO – Plataforma SaaS para clínicas de saúde
                  </h3>

                  <div
                    className="flex gap-2 items-center overflow-x-auto"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm">
                      NextJS
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm">
                      TailwindCSS
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm">
                      Stripe
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="leading-8 font-medium text-text-secondary line-clamp-3">
                    Solução web desenvolvida para clínicas criarem seu perfil
                    completo, com informações, fotos, serviços oferecidos,
                    horários de funci...
                  </p>

                  <nav className="w-full flex items-center gap-3 msm:gap-6">
                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40]"
                    >
                      <FaGithub className="w-5 h-5" color="#FFF" />
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40]"
                    >
                      <Image
                        src={figmaIcon}
                        alt="Ícone de acesso ao protótipo no Figma"
                        className="w-5 h-5"
                      />
                    </Link>

                    <Button asChild variant="seeMore" size="seeMore">
                      <Link
                        href="#"
                        className="text-white font-bold flex items-center gap-2"
                      >
                        Projeto no ar
                        <SquareArrowOutUpRight className="size-5" color="#FFF" />
                      </Link>
                    </Button>
                  </nav>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="seeMore" size="seeMore" className="bg-transparent border border-[#999999] font-bold py-2 ssm:py-3">
            Ver mais
          </Button>
        </article>
      </aside>
    </section>
  );
};

export default Projects;
