import { BriefcaseBusiness, House, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { BiMailSend } from "react-icons/bi";
import { RxInfoCircled } from "react-icons/rx";

export const useNavigationOptions = () => {
  const t = useTranslations("Navigation");

  return [
    { href: "#presentation", id: "presentation", label: t("presentation"), icon: House },
    {
      href: "#experience",
      id: "experience",
      label: t("experience"),
      icon: BriefcaseBusiness,
    },
    { href: "#projects", id: "projects", label: t("projects"), icon: Layers },
    { href: "#about", id: "about", label: t("about"), icon: RxInfoCircled },
    { href: "#contact", id: "contact", label: t("contact"), icon: BiMailSend },
  ]
}
