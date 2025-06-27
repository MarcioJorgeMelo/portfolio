import { CodeXml, LoaderCircle } from "lucide-react";
import apresentationRoundedImage from "../../public/apresentationImgMobile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import EmailButton from "./emailButton";
import CurriculumDownloadButton from "./curriculumDownload";
import { socialLinks } from "@/shared/mocks/socialLinks";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";

const Presentation = () => {
  return (
    <section
      id="presentation"
      className="w-full py-10 px-6 flex flex-col gap-3"
    >
      <aside className="w-full flex relative items-center gap-7">
        <Avatar className="w-[110px] h-[110px] ssm:w-[125px] ssm:h-[125px] msm:w-[150px] msm:h-[150px] rounded-full">
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
          className="absolute -bottom-2 left-19 stroke-2 ssm:left-22 msm:left-26 msm:stroke-3 z-10"
        />

        <div className="w-full flex flex-col items-start gap-2.5">
          <div className="w-full max-w-[96px] bg-gradient-to-r from-primary-blue to-secondary-blue h-[5px]" />

          <h1 className="text-white text-2xl ssm:text-[26px] xsm:text-[28px] font-bold">
            Márcio Jorge,
            <br />
            Desenvolvedor Frontend
          </h1>
        </div>
      </aside>

      <aside className="py-6 flex flex-col w-full">
        <p className="text-text-secondary leading-8 font-medium">
          Desenvolvedor Frontend com foco em UI/UX, especialista em desenvolver
          interfaces modernas, intuitivas e de grande impacto. Uno criatividade
          e domínio técnico para transformar ideias em experiências digitais que
          encantam e geram resultados.
        </p>
      </aside>

      <aside className="w-full flex gap-6 pt-6">
        <div className="w-full flex flex-col gap-6">
          <h3 className="text-white text-xss font-bold">ENTRE EM CONTATO</h3>

          <div className="flex gap-5 items-center">
            {socialLinks.map((link) =>
              link.id === "email" ? (
                <EmailButton key="email" />
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-6 h-6 text-white" />
                </Link>
              )
            )}
          </div>
        </div>

        <CurriculumDownloadButton type={CurriculumDownloadButtonEnum.COL} />
      </aside>
    </section>
  );
};

export default Presentation;
