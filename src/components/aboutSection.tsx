import Image from "next/image";
import aboutImg from "../../public/aboutImg.jpg";
import { stacks } from "@/mocks/stacks";

const About = () => {
  return (
    <section id="#about" className="py-10 bg-[#22282F]">
      <div className="px-6 pb-12 flex flex-col w-full gap-10">
        <aside className="flex flex-col">
          <div className="w-full max-w-[96px] bg-white h-2 mb-6" />
          <h1 className="text-white text-[36px] font-bold">Sobre mim</h1>
        </aside>

        <aside className="relative h-[450px]">
          <Image
            src={aboutImg}
            alt="Foto pessoal do Márcio Jorge"
            quality={100}
            priority
            fill
            className="object-cover rounded-2xl"
          />
        </aside>

        <aside className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="leading-[30px] tracking-wide text-[#C6C6C6]">
              Olá, sou Márcio Jorge,{" "}
              <span className="font-bold text-white">
                Desenvolvedor Frontend
              </span>{" "}
              com{" "}
              <span className="font-bold text-white">1 ano de experiência</span>
              . Com forte{" "}
              <span className="font-bold text-white">foco em UI/UX</span>,
              combino design e tecnologia para construir projetos inovadores e
              impactantes, ajudando empresas a se destacarem no mundo digital.
            </p>
            <p className="leading-[30px] tracking-wide text-[#C6C6C6]">
              Sou especialista em desenvolvimento de interfaces fluidas,
              intuitivas, acessíveis e responsivas para sites e aplicativos.
              Tenho olhar atento aos detalhes e sou movido pela busca constante
              por inovação, transformando ideias em experiências digitais
              cativantes e funcionais.
            </p>
            <p className="leading-[30px] tracking-wide text-[#C6C6C6]">
              Aliando criatividade e conhecimento técnico, entrego soluções que
              não apenas encantam os usuários, mas também geram resultados
              reais.
            </p>
            <p className="leading-[30px] tracking-wide text-[#C6C6C6]">
              Vamos juntos construir algo extraordinário!
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <h2 className="font-medium text-[18px] text-[#C6C6C6]">
              Conhecimento nas seguintes linguagens e ferramentas...
            </h2>

            <div className="grid grid-cols-4 gap-8">
              {stacks.map((item, index) => (
                <div
                  key={index}
                  className="p-2 rounded-[12px] bg-[#2B313B] flex items-center justify-center ring-2 ring-[#FFF]/20 hover:ring-[#FFF]/40 transition-all duration-300"
                >
                  <Image src={item} alt="Icone" height={44} width={44} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
