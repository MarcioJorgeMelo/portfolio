"use client";

import { ArrowRight, ChevronDown, CodeXml, LoaderCircle } from "lucide-react";
import apresentationRoundedImage from "../../public/presentationImgMobile.png";
import apresentationImage from "../../public/presentationImg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import CurriculumDownloadButton from "./curriculumDownload";
import { socialLinks } from "@/shared/mocks/socialLinks";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Presentation = () => {
  const t = useTranslations("Presentation");

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="presentation"
      className="relative w-full py-10 px-6 flex flex-col gap-3 sm:max-w-[1536px] sm:p-0 sm:mx-auto sm:flex-row sm:justify-between sm:items-center sm:gap-0"
    >
      <div className="w-full flex flex-col sm:max-w-[600px] sm:gap-20">
        <div>
          <aside className="w-full flex relative items-center gap-7">
            <Avatar className="w-[110px] h-[110px] ssm:w-[125px] ssm:h-[125px] msm:w-[150px] msm:h-[150px] rounded-full sm:hidden">
              <AvatarImage
                src={apresentationRoundedImage.src}
                alt="Imagem do Márcio Jorge"
                className="object-cover"
              />
              <AvatarFallback className="bg-dark-background">
                <LoaderCircle
                  size={64}
                  color="var(--color-primary-blue)"
                  className="animate-spin"
                />
              </AvatarFallback>
            </Avatar>
            <CodeXml
              size={36}
              strokeWidth={2.5}
              color="var(--color-primary-blue)"
              className="absolute -bottom-2 left-19 stroke-2 ssm:left-22 ssm:stroke-3 msm:left-26 z-10 sm:hidden"
            />
            <div className="w-full flex flex-col items-start gap-2.5 sm:gap-12">
              <div className="w-full max-w-[96px] bg-gradient-to-r from-primary-blue to-secondary-blue h-[5px] sm:max-w-[148px] sm:h-2" />
              <h1 className="text-white text-2xl ssm:text-[26px] xsm:text-[28px] sm:text-[76px] font-bold">
                {t("title1")}
                <br />
                {t("title2")}
              </h1>
            </div>
          </aside>
          <aside className="py-6 flex flex-col w-full sm:p-0">
            <p className="text-text-secondary leading-8 font-medium sm:text-xss">
              {t("title-description")}
            </p>
          </aside>
        </div>

        <Button
          variant="underline"
          className="hidden sm:flex justify-center items-center w-[120px] h-[120px] bg-primary-blue rounded-full hover:scale-105"
          asChild
        >
          <Link href="#experience">
            <ChevronDown className="size-20 stroke-2 text-white animate-bounce" />
          </Link>
        </Button>
      </div>

      <div className="hidden sm:block absolute -top-20 left-[50.6%] -translate-x-1/2 w-[765px] h-[1147px] -z-10">
        <Image
          src={apresentationImage}
          alt="Imagem pessoal do Márcio Jorge"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      <aside className="w-full flex gap-6 pt-6 sm:max-w-[400px] sm:flex-col sm:gap-5 sm:p-0 sm:px-6">
        <div className="hidden sm:flex flex-col gap-[18px]">
          <h3 className="text-xss text-white font-bold">{t("about-title")}</h3>

          <p className="text-xss leading-8 font-medium text-text-secondary">
            {t.rich("about-description", {
              react: (chunks) => <span className="text-white font-bold">{chunks}</span>,
              next: (chunks) => <span className="text-white font-bold">{chunks}</span>,
              ts: (chunks) => <span className="text-white font-bold">{chunks}</span>,
            })}
          </p>

          <Link
            href="#about"
            className="group relative w-fit flex items-center gap-3 pb-1.5 text-white font-bold"
          >
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#445166]" />

            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

            <span className="relative z-10 flex items-center gap-3">
              {t("about-link")}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        <div className="hidden sm:block w-full h-[1px] bg-[#2D343F] rounded-full" />

        <div className="hidden sm:flex flex-col gap-[18px]">
          <h3 className="text-xss text-white font-bold">{t("projects-title")}</h3>

          <p className="text-xss leading-8 font-medium text-text-secondary">
            {t("projects-description")}
          </p>

          <Link
            href="#projects"
            className="group relative w-fit flex items-center gap-3 pb-1.5 text-white font-bold"
          >
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#445166]" />

            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

            <span className="relative z-10 flex items-center gap-3">
              {t("projects-link")}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        <div className="hidden sm:block w-full h-[1px] bg-[#2D343F] rounded-full" />

        <div className="w-full flex flex-col gap-6 sm:justify-center sm:items-center sm:px-3 sm:py-10 sm:rounded-tr-[6px] sm:rounded-tl-[6px] sm:bg-light-background">
          <h3 className="text-white text-xss font-bold">{t("contactMe-section")}</h3>

          <div className="flex gap-5 items-center">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target={link.id === "email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`transition-opacity duration-500 ${hoveredId && hoveredId !== link.id
                  ? "opacity-30"
                  : "opacity-100"
                  }`}
              >
                <link.icon className="w-6 h-6 text-white" />
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <CurriculumDownloadButton type={CurriculumDownloadButtonEnum.ROW} />
          </div>
        </div>

        <div className="sm:hidden">
          <CurriculumDownloadButton type={CurriculumDownloadButtonEnum.COL} />
        </div>
      </aside>
    </section>
  );
};

export default Presentation;
