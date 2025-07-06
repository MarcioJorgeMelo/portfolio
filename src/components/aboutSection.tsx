"use client";

import Image from "next/image";
import aboutImgMobile from "../../public/aboutImgMobile.png";
import aboutImgWeb from "../../public/aboutImgWeb.png";
import { stacks } from "@/shared/mocks/stacks";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

const About = () => {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  const aboutImg = isMobile ? aboutImgMobile : aboutImgWeb;

  return (
    <section
      id="about"
      className="py-10 px-6 w-full bg-light-background sm:px-0 sm:py-20"
    >
      <div className="w-full sm:max-w-[1536px] mx-auto flex flex-col gap-10">
        <aside className="flex flex-col gap-4">
          <div className="w-full max-w-[96px] bg-white h-2 sm:max-w-[148px]" />
          <h1 className="text-white text-xgg font-bold sm:text-[52px]">
            Sobre mim
          </h1>
        </aside>

        <aside className="flex flex-col gap-16 justify-center">
          <aside className="w-full flex flex-col gap-10 sm:flex-row sm:gap-0 sm:bg-dark-background sm:mx-auto sm:rounded-2xl sm:w-[1191px]">
            <div className="relative w-full h-[450px] sm:w-[450px] sm:h-[510px]">
              <Image
                src={aboutImg}
                alt="Foto pessoal do Márcio Jorge"
                quality={100}
                priority
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:w-[741px] sm:h-[510px] sm:p-8 sm:justify-center">
              <p className="leading-[30px] tracking-wide text-text-secondary">
                Olá, sou Márcio Jorge,{" "}
                <span className="font-bold text-white">
                  Desenvolvedor Frontend
                </span>{" "}
                com{" "}
                <span className="font-bold text-white">
                  1 ano de experiência
                </span>
                . Com forte{" "}
                <span className="font-bold text-white">foco em UI/UX</span>,
                combino design e tecnologia para construir projetos inovadores e
                impactantes, ajudando empresas a se destacarem no mundo digital.
              </p>
              <p className="leading-[30px] tracking-wide text-text-secondary">
                Sou especialista em desenvolvimento de interfaces fluidas,
                intuitivas, acessíveis e responsivas para sites e aplicativos.
                Tenho olhar atento aos detalhes e sou movido pela busca
                constante por inovação, transformando ideias em experiências
                digitais cativantes e funcionais.
              </p>
              <p className="leading-[30px] tracking-wide text-text-secondary">
                Aliando criatividade e conhecimento técnico, entrego soluções
                que não apenas encantam os usuários, mas também geram resultados
                reais.
              </p>
              <p className="leading-[30px] tracking-wide text-text-secondary">
                Vamos juntos construir algo extraordinário!
              </p>
            </div>
          </aside>

          <aside className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-10 mx-auto">
              <h2 className="font-medium text-xss text-text-secondary sm:text-center sm:text-[20px]">
                Conhecimento nas seguintes linguagens e ferramentas...
              </h2>

              <div className="grid grid-cols-4 gap-8 sm:w-full sm:max-w-[1080px] sm:flex sm:flex-wrap sm:justify-center">
                {stacks.map((item, index) => (
                  <div
                    key={index}
                    className="relative group p-2 rounded-[12px] bg-light-boxes flex items-center justify-center ring-2 ring-[#FFF]/20 hover:ring-[#FFF]/40 transition-all duration-300"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      height={44}
                      width={44}
                    />

                    <span className="absolute bottom-full mb-2 px-2 py-1 rounded-[8px] bg-dark-background text-white font-medium border border-[#FFF]/40 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </aside>
      </div>
    </section>
  );
};

export default About;
