"use client";

import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

const CurriculumDownloadButton = () => {
  return (
    <a href="/curriculo_marcio_jorge_ats.pdf" download>
      <Button variant="download" size="download">
        <FileDown className="size-6" />
        Baixar
        <br />
        currículo
      </Button>
    </a>
  );
};

export default CurriculumDownloadButton;
