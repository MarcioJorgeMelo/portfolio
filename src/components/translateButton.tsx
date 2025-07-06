"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftRight } from "lucide-react";
import { languagesOptions } from "@/shared/mocks/languageOptions";
import { useState } from "react";

const TranslateButton = () => {
  const [translateEnglish, setTranslateEnglish] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        variant="translate"
        size="translate"
        onClick={() => setTranslateEnglish(!translateEnglish)}
      >
        <Image
          src={
            translateEnglish
              ? languagesOptions[0].image
              : languagesOptions[1].image
          }
          alt={
            translateEnglish ? languagesOptions[0].alt : languagesOptions[1].alt
          }
          className="size-6 rounded-full"
        />

        <ArrowLeftRight className="size-5" color="#FFF" />
      </Button>
    </div>
  );
};

export default TranslateButton;
