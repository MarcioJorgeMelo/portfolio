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
} from "@/components/ui/drawer"
import { useTranslations } from "next-intl";
import { useState } from "react";

const Projects = () => {
  const t = useTranslations("Projects");

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

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
              <Card className="w-full overflow-hidden p-0 bg-transparent border-[#3E3F40] rounded-[12px]">
                <CardContent className="p-0 hover:cursor-pointer">
                  <main onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
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

              <Card className="w-full overflow-hidden p-0 bg-transparent border-[#3E3F40] rounded-[12px]">
                <CardContent className="p-0">
                  <div className="relative h-[220px] sm:h-[280px]">
                    <Image
                      src={CapaExImg}
                      alt="Capa de um projeto"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4 p-3 sm:gap-6 sm:p-4">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xss font-bold text-white sm:text-2xl">
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
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6">
                      <p className="leading-8 font-medium text-text-secondary line-clamp-3 sm:text-xss">
                        {t("project-description")}
                      </p>

                      <nav className="w-full flex items-center gap-3 msm:gap-6">
                        <Link
                          href="#"
                          className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
                        >
                          <FaGithub className="w-5 h-5" color="#FFF" />
                        </Link>

                        <Link
                          href="#"
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
                            href="#"
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
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full overflow-hidden p-0 bg-transparent border-[#3E3F40] rounded-[12px]">
                <CardContent className="p-0">
                  <div className="relative h-[220px] sm:h-[280px]">
                    <Image
                      src={CapaExImg}
                      alt="Capa de um projeto"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4 p-3 sm:gap-6 sm:p-4">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xss font-bold text-white sm:text-2xl">
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
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6">
                      <p className="leading-8 font-medium text-text-secondary line-clamp-3 sm:text-xss">
                        {t("project-description")}
                      </p>

                      <nav className="w-full flex items-center gap-3 msm:gap-6">
                        <Link
                          href="#"
                          className="flex items-center justify-center px-4 py-3 rounded-[8px] border-1 border-[#3E3F40] hover:bg-light-boxes hover:scale-105 transition-all duration-300"
                        >
                          <FaGithub className="w-5 h-5" color="#FFF" />
                        </Link>

                        <Link
                          href="#"
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
                            href="#"
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="seeMore"
              size="seeMore"
              className="bg-transparent border border-[#999999] font-bold py-2 ssm:py-3"
            >
              {t("seeMore-button")}
            </Button>
          </aside>
        </TabsContent>
        <TabsContent value="mobile">Mobile</TabsContent>
        <TabsContent value="design">Design</TabsContent>
        <TabsContent value="desktop">Desktop</TabsContent>
      </Tabs>

      <Drawer open={drawerIsOpen}>
        <DrawerContent className="bg-dark-background border-0 ring-0 ">
          <div>
            <DrawerClose>
              <Button variant="outline" className="flex items-center justify-center bg-[#292F39] rounded-full p-2" onClick={() => setDrawerIsOpen(false)}><X className="size-3" /></Button>
            </DrawerClose>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Projects;
