import CapaExImg from "../../public/capa-ex.png";
import githubIcon from "../../public/GitHub.png";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section id="#projects" className="w-full py-10 px-6 flex flex-col gap-10">
      <aside className="flex flex-col gap-4">
        <div className="w-full max-w-[96px] bg-white h-2" />
        <h1 className="text-white text-xgg font-bold">Projetos</h1>
      </aside>

      <aside className="w-full flex flex-col gap-6">
        <article className="w-full flex justify-between items-center">
          <aside className="px-3 pb-1.5 border-b-[3px] border-primary-blue">
            <h2 className="font-bold text-xss text-white">Web</h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-xss text-white">Mobile</h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-xss text-white">Design</h2>
          </aside>

          <aside className="px-3 pb-1.5">
            <h2 className="font-bold text-xss text-white">Desktop</h2>
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

                  <div className="flex gap-2 items-center">
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

                  <nav className="flex items-center gap-3">
                    <Link
                      href="#"
                      className="text-white font-bold text-sm flex items-center gap-2"
                    >
                      Projeto no ar
                      <SquareArrowOutUpRight size={18} color="#FFF" />
                    </Link>

                    <Link
                      href="#"
                      className="text-white font-bold text-sm flex items-center gap-2"
                    >
                      Repositório
                      <Image
                        src={githubIcon}
                        alt="Ícone do Github"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </nav>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="seeMore" size="seeMore">
            Ver mais...
          </Button>
        </article>
      </aside>
    </section>
  );
};

export default Projects;
