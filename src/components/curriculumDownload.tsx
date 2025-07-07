"use client";

import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";
import { useTranslations } from "next-intl";

interface CurriculumDownloadButtonProps {
  type: CurriculumDownloadButtonEnum;
}

const CurriculumDownloadButton = ({ type }: CurriculumDownloadButtonProps) => {
  const t = useTranslations("Presentation");

  return (
    <a href="/curriculo_marcio_jorge_ats.pdf" download>
      {type === CurriculumDownloadButtonEnum.COL ? (
        <Button variant="download" size="download">
          <FileDown className="size-6" />
          {t("col-button1")}
          <br />
          {t("col-button2")}
        </Button>
      ) : (
        <Button variant="seeMore" size="seeMore" className="gap-3">
          {t("row-button")}
          <FileDown className="size-6" />
        </Button>
      )}
    </a>
  );
};

export default CurriculumDownloadButton;
