import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col gap-4 items-center justify-center py-3">
      <div className="w-[660px] h-[1px] bg-[#2D343F]" />

      <span className="text-[#999999]">{t("message")}</span>
    </footer>
  );
};

export default Footer;
