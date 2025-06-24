const Experience = () => {
  return (
    <section id="#experience" className="py-10 bg-[#22282F]">
      <div className="px-6 pb-12 flex flex-col w-full gap-10">
        <aside className="flex flex-col">
          <div className="w-full max-w-[96px] bg-white h-2 mb-6" />
          <h1 className="text-white text-[36px] font-bold">Experiência</h1>
        </aside>

        <aside className="w-full flex flex-col gap-10">
          <div className="w-full pl-6 py-4 border-l-4 border-[#0760E2] bg-[#2B313B]">
            <h3 className="text-[18px] font-bold text-white">LIVSAÚDE</h3>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[18px] font-bold text-white">
                Desenvolvedor Frontend
              </h3>

              <p className="text-sm text-[#C6C6C6]">
                Outubro 2024 - No momento (X meses)
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-medium text-white">LIVSAÚDE</h3>

              <p className="font-medium leading-8 text-[#C6C6C6]">
                Atuação no time de tecnologia da Livsaúde, desenvolvendo sites e
                sistemas internos com foco em performance e usabilidade.
                Experiência com React, Figma e Electron na criação de interfaces
                web modernas. A empresa é referência em inovação na saúde, com
                soluções digitais como app, portal e serviços de telemedicina.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
