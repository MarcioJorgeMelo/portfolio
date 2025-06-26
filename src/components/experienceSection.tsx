const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 px-6 flex flex-col w-full gap-10 bg-light-background"
    >
      <aside className="flex flex-col gap-4">
        <div className="w-full max-w-[96px] bg-white h-2" />
        <h1 className="text-white text-xgg font-bold">Experiência</h1>
      </aside>

      <aside className="w-full flex flex-col gap-10">
        <div className="w-full pl-6 py-4 border-l-4 border-primary-blue bg-light-boxes">
          <h3 className="text-xss font-bold text-white">LIVSAÚDE</h3>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xss font-bold text-white">
              Desenvolvedor Frontend
            </h3>

            <p className="text-sm text-text-secondary">
              Outubro 2024 - No momento (X meses)
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xss font-medium text-white">LIVSAÚDE</h3>

            <p className="font-medium leading-8 text-text-secondary">
              Faço parte do time de{" "}
              <span className="font-bold text-white">
                Desenvolvimento E Inovação
              </span>{" "}
              da LIVSAÚDE, contribuindo na criação e evolução de sistemas
              internos, portais web e aplicativos mobile com foco em
              performance, usabilidade e experiência do usuário. Utilizo{" "}
              <span className="font-bold text-white">React</span> e{" "}
              <span className="font-bold text-white">React Native</span> para
              construir soluções modernas e acessíveis, Figma para análise e
              adaptação de layouts e{" "}
              <span className="font-bold text-white">Electron</span> em
              aplicações desktop. Atuo em projetos estratégicos que envolvem
              telemedicina, apps de saúde e ferramentas administrativas,
              apoiando a transformação digital da empresa, referência em
              inovação no setor.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Experience;
