import { CodeXml, LoaderCircle } from "lucide-react";
import Image from "next/image";
import apresentationRoundedImage from "../../public/apresentationImgMobile.png";
import linkedinIcon from "../../public/LinkedIn.png";
import githubIcon from "../../public/GitHub.png";
import whatsappIcon from "../../public/WhatsApp.png";
import instagramIcon from "../../public/Instagram.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import EmailButton from "./emailButton";
import CurriculumDownloadButton from "./curriculumDownload";

const Presentation = () => {
  return (
    <section
      id="apresentation"
      className="w-full py-10 px-6 flex flex-col gap-3"
    >
      <aside className="w-full flex justify-center relative items-center gap-7">
        <Avatar className="w-[150px] h-[150px] rounded-full">
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
          strokeWidth={3}
          color="var(--color-primary-blue)"
          className="absolute -bottom-2 left-26 z-10"
        />

        <div className="w-full flex flex-col items-start gap-2.5">
          <div className="w-full max-w-[96px] bg-gradient-to-r from-primary-blue to-secondary-blue h-[5px]" />

          <h1 className="text-white text-[28px] font-bold">
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

      <aside className="w-full flex items-center justify-center gap-6 pt-6">
        <div className="w-full flex flex-col gap-6">
          <h3 className="text-white text-xss font-bold">ENTRE EM CONTATO</h3>

          <div className="flex gap-5 items-center">
            <Link
              href="https://www.linkedin.com/in/m%C3%A1rcio-jorge-417aa127a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt="Ícone do LinkedIn"
                height={28}
                width={28}
              />
            </Link>

            <EmailButton />

            <Link
              href="https://wa.me/5585985603089?text=Olá, vim pelo seu porfólio!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={whatsappIcon}
                alt="Ícone do Whatsapp"
                height={28}
                width={28}
              />
            </Link>

            <Link
              href="https://www.instagram.com/jorge.developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Ícone do Instagram"
                height={28}
                width={28}
              />
            </Link>

            <Link
              href="https://github.com/MarcioJorgeMelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt="Ícone do Github"
                height={28}
                width={28}
              />
            </Link>
          </div>
        </div>

        <CurriculumDownloadButton />
      </aside>
    </section>
  );
};

export default Presentation;
