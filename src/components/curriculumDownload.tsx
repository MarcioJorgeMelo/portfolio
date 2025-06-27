"use client";

import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";

interface CurriculumDownloadButtonProps {
  type: CurriculumDownloadButtonEnum;
}

const CurriculumDownloadButton = ({ type }: CurriculumDownloadButtonProps) => {
  return (
    <a href="/curriculo_marcio_jorge_ats.pdf" download>
      {type === CurriculumDownloadButtonEnum.COL ? (
        <Button variant="download" size="download">
          <FileDown className="size-6" />
          Baixar
          <br />
          currículo
        </Button>
      ) : (
        <Button variant="seeMore" size="seeMore" className="gap-3">
          Baixar currículo
          <FileDown className="size-6" />
        </Button>
      )}
    </a>
  );
};

export default CurriculumDownloadButton;
