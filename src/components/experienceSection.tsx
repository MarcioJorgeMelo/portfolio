import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <section
      id="experience"
      className="py-10 w-full bg-light-background sm:py-40"
    >
      <div className="w-full sm:max-w-[1536px] mx-auto flex flex-col gap-10 px-4 sm:px-0">
        <aside className="flex flex-col gap-4">
          <div className="w-full max-w-[96px] bg-white h-2 sm:max-w-[148px]" />
          <h1 className="text-white text-xgg font-bold sm:text-[52px]">
            {t("title")}
          </h1>
        </aside>

        <aside className="w-full flex flex-col gap-10 sm:flex-row sm:gap-20">
          <div className="w-full h-fit pl-6 py-4 border-l-4 border-primary-blue bg-light-boxes sm:max-w-80">
            <h3 className="text-xss font-bold text-white sm:text-[20px]">
              LIVSAÚDE
            </h3>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-8">
              <h3 className="text-xss font-bold text-white sm:text-[20px]">
                {t("job")}
              </h3>

              <p className="text-sm text-text-secondary sm:text-base">
                {t("entryIn")}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xss font-medium text-white sm:text-[20px]">
                LIVSAÚDE
              </h3>

              <p className="font-medium leading-8 text-text-secondary sm:text-xss">
                {t.rich("job-description", {
                  react: (chunks) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                  native: (chunks) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                  figma: (chunks) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                  electron: (chunks) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
