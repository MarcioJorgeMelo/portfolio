import { useTranslations } from "next-intl";
import CapaExImg from "../../../public/capa-ex.png";

export const useAllProjects = () => {
    const t = useTranslations("Projects");

    return [
        { id: 1, title: t("project-title"), description: t("project-description"), image: CapaExImg },
        { id: 2, title: t("project-title"), description: t("project-description"), image: CapaExImg },
        { id: 3, title: t("project-title"), description: t("project-description"), image: CapaExImg },
        { id: 4, title: t("project-title"), description: t("project-description"), image: CapaExImg },
        { id: 5, title: t("project-title"), description: t("project-description"), image: CapaExImg },
    ]
}