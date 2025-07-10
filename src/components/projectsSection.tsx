"use client"

import CapaExImg from "../../public/capa-ex.png";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { SquareArrowOutUpRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import figmaIcon from "../../public/Figma.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { projectCovers } from "@/shared/mocks/projectImages";
import clsx from "clsx";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { useAllProjects } from "@/shared/mocks/projects";

const Projects = () => {
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  const t = useTranslations("Projects");

  const projects = useAllProjects();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(projectCovers[0]);
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projects.slice(0, visibleCount);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function projectDetailOpen() {
    if (!isClient) return;

    if (width > 640) {
      setDialogIsOpen(true);
    } else {
      setDrawerIsOpen(true);
    }
  }

  return (
    <section
      id="projects"
      className="w-full max-w-[1536px] mx-auto py-10 px-6 flex flex-col gap-10 sm:py-30 sm:px-0"
    >
      <aside className="flex flex-col gap-4">
        <div className="w-full max-w-[96px] bg-white h-2 sm:max-w-[148px]" />
        <h1 className="text-white text-xgg font-bold sm:text-[52px]">
          {t("title")}
        </h1>
      </aside>

      <Tabs defaultValue="web" className="w-full">
        <TabsList className="w-full bg-transparent justify-between sm:w-fit sm:justify-normal sm:gap-6">
          <TabsTrigger
            value="web"
            className="font-bold text-base ssm:text-lg text-white"
          >
            Web
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="font-bold text-base ssm:text-lg text-white"
          >
            Mobile
          </TabsTrigger>
          <TabsTrigger
            value="design"
            className="font-bold text-base ssm:text-lg text-white"
          >
            Design
          </TabsTrigger>
          <TabsTrigger
            value="desktop"
            className="font-bold text-base ssm:text-lg text-white"
          >
            Desktop
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <aside className="w-full flex flex-col gap-10 justify-center">
            <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16">
              {visibleProjects.map(project => (
                <Card key={project.id} className="w-full overflow-hidden p-0 bg-transparent border-[#3E3F40] rounded-[12px]">
                  <CardContent className="p-0 hover:cursor-pointer">
                    <main onClick={projectDetailOpen}>
                      <div className="relative h-[220px] sm:h-[280px] sm:hover:scale-105">
                        <Image
                          src={CapaExImg}
                          alt="Capa de um projeto"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-4 p-3 sm:gap-6 sm:p-4">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xss font-bold text-white text-start sm:text-2xl">
                            {t("project-title")}
                          </h3>

                          <div
                            className="flex gap-2 items-center overflow-x-auto sm:gap-3"
                            style={{
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }}
                          >
                            <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                              NextJS
                            </Badge>

                            <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                              TailwindCSS
                            </Badge>

                            <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                              Stripe
                            </Badge>

                            <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                              PostgreSQL
                            </Badge>
                          </div>

                          <p className="leading-8 font-medium text-text-secondary text-start line-clamp-3 sm:text-xss">
                            {t("project-description")}
                          </p>
                        </div>
                      </div>
                    </main>

                    <CardFooter className="p-3 sm:p-4">
                      <nav className="w-full flex items-center gap-3 msm:gap-6">
                        <Link
                          href="#github"
                          className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
                        >
                          <FaGithub className="w-5 h-5" color="#FFF" />
                        </Link>

                        <Link
                          href="#figma"
                          className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
                        >
                          <Image
                            src={figmaIcon}
                            alt="Ícone de acesso ao protótipo no Figma"
                            className="w-5 h-5"
                          />
                        </Link>

                        <Button
                          asChild
                          variant="seeMore"
                          size="seeMore"
                          className="flex-1"
                        >
                          <Link
                            href="#deploy"
                            className="text-white font-bold flex items-center gap-2"
                          >
                            {t("deploy-button")}
                            <SquareArrowOutUpRight
                              className="size-5"
                              color="#FFF"
                            />
                          </Link>
                        </Button>
                      </nav>
                    </CardFooter>
                  </CardContent>
                </Card>
              ))}
            </div>

            {visibleCount < projects.length && (
              <Button
                onClick={() => setVisibleCount(prev => prev + 3)}
                variant="seeMore"
                size="seeMore"
                className="bg-transparent border border-[#999999] font-bold py-2 ssm:py-3"
              >
                {t("seeMore-button")}
              </Button>
            )}


          </aside>
        </TabsContent>
        <TabsContent value="mobile">Mobile</TabsContent>
        <TabsContent value="design">Design</TabsContent>
        <TabsContent value="desktop">Desktop</TabsContent>
      </Tabs>

      <Drawer open={drawerIsOpen} onOpenChange={setDrawerIsOpen}>
        <DrawerContent className="bg-dark-background border-0 ring-0 p-0">
          <DrawerTitle className="sr-only">Título do Drawer</DrawerTitle>

          <div className="w-full flex flex-col items-end gap-3 p-3 overflow-y-auto">
            <DrawerClose asChild>
              <Button variant="close" size="close" onClick={() => setDrawerIsOpen(false)}><X className="size-3 text-white" /></Button>
            </DrawerClose>

            <div className="w-full flex flex-col gap-4 overflow-y-auto">
              <div className="w-full flex flex-col gap-4">
                <div className="relative w-full h-[270px] rounded-[8px]">
                  <Image
                    src={imageSelected.src}
                    alt={imageSelected.alt}
                    fill
                    className="object-cover rounded-[8px]"
                  />
                </div>

                <div className="flex items-center gap-4 overflow-x-auto flex-nowrap">
                  {projectCovers.map(item => (
                    <div
                      key={item.id}
                      className="relative w-[112px] h-[56px] rounded-[8px] shrink-0"
                      onClick={() => setImageSelected(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className={clsx(
                          "object-cover rounded-[8px]",
                          item.id !== imageSelected.id && "opacity-40"
                        )}
                      />
                    </div>
                  ))}
                </div>

                <h1 className="text-2xl font-bold text-white">OdontoPRO – Plataforma SaaS para clínicas de saúde</h1>

                <div className="w-full flex flex-col gap-4">
                  <div
                    className="flex gap-2 items-center overflow-x-auto sm:gap-3"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                      NextJS
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                      TailwindCSS
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                      Stripe
                    </Badge>

                    <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                      PostgreSQL
                    </Badge>
                  </div>

                  <p className="leading-8 font-medium text-text-secondary text-start line-clamp-3 sm:text-xss">
                    {t("project-description")}
                  </p>

                  <p className="leading-8 font-medium text-text-secondary sm:text-xss mb-4">
                    Desafios técnicos:<br />
                    -asdasdasd<br />
                    -sadasdas<br />
                    -adasdasd<br />
                    -adasdadadas<br />
                    -asdasdasd<br />
                    -sadasdas<br />
                    -adasdasd<br />
                    -adasdadadas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter className="p-0 px-4 py-3">
            <nav className="w-full flex items-center gap-3 msm:gap-6">
              <Link
                href="#github"
                className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" color="#FFF" />
              </Link>

              <Link
                href="#figma"
                className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={figmaIcon}
                  alt="Ícone de acesso ao protótipo no Figma"
                  className="w-5 h-5"
                />
              </Link>

              <Button
                asChild
                variant="seeMore"
                size="seeMore"
                className="flex-1"
              >
                <Link
                  href="#deploy"
                  className="text-white font-bold flex items-center gap-2"
                >
                  {t("deploy-button")}
                  <SquareArrowOutUpRight
                    className="size-5"
                    color="#FFF"
                  />
                </Link>
              </Button>
            </nav>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogContent className="flex justify-center gap-6 bg-dark-background border-0 ring-0 p-6 rounded-[12px]">
          <DialogTitle className="sr-only">Título do Dialog</DialogTitle>

          <div className="w-[564px] flex flex-col gap-6">
            <div className="relative w-full h-[280px] rounded-[8px]">
              <Image
                src={imageSelected.src}
                alt={imageSelected.alt}
                fill
                className="object-cover rounded-[8px]"
              />
            </div>

            <div className="flex items-center gap-6 overflow-x-auto flex-nowrap" style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>
              {projectCovers.map(item => (
                <div
                  key={item.id}
                  className="relative w-[112px] h-[56px] rounded-[8px] shrink-0"
                  onClick={() => setImageSelected(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={clsx(
                      "object-cover rounded-[8px]",
                      item.id !== imageSelected.id && "opacity-40"
                    )}
                  />
                </div>
              ))}
            </div>

            <h1 className="text-[32px] font-bold text-white">OdontoPRO – Plataforma SaaS para clínicas de saúde</h1>

            <nav className="w-full flex items-center gap-3 msm:gap-6">
              <Button
                asChild
                variant="seeMore"
                size="seeMore"
                className="flex-1"
              >
                <Link
                  href="#deploy"
                  className="text-white font-bold flex items-center gap-2"
                >
                  {t("deploy-button")}
                  <SquareArrowOutUpRight
                    className="size-5"
                    color="#FFF"
                  />
                </Link>
              </Button>

              <Link
                href="#github"
                className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" color="#FFF" />
              </Link>

              <Link
                href="#figma"
                className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={figmaIcon}
                  alt="Ícone de acesso ao protótipo no Figma"
                  className="w-5 h-5"
                />
              </Link>

            </nav>
          </div>

          <div className="w-full flex flex-col gap-6 pt-4 overflow-y-auto">
            <div
              className="flex gap-2 items-center overflow-x-auto sm:gap-3"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                NextJS
              </Badge>

              <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                TailwindCSS
              </Badge>

              <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                Stripe
              </Badge>

              <Badge className="px-2 py-1.5 rounded-3xl bg-[#292F39] text-white font-bold text-sm sm:px-3 sm:py-2 sm:text-base">
                PostgreSQL
              </Badge>
            </div>

            <p className="text-xss leading-8 font-medium text-text-secondary">
              Solução web desenvolvida para clínicas criarem seu perfil completo, com informações, fotos, serviços oferecidos, horários de funcionamento e agendas médicas.
            </p>

            <p className="text-xss leading-8 text-text-secondary">
              <span className="text-white font-bold">Desafios técnicos:</span> <br />
              -asdasdasd <br />
              -sadasdas <br />
              -adasdasd <br />
              -adasdadadas <br />
              -asdasdasd <br />
              -sadasdas <br />
              -adasdasd <br />
              -adasdadadas <br />
              -adasdadadas
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
