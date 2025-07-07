"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const TranslateFloatButton = () => {
  const t = useTranslations("TranslateOption");

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        variant="translate"
        size="translate"
        asChild
      >
        <Link href={t("language")}>
          <Image
            src={t("image")}
            alt={t("alt")}
            width={24}
            height={24}
            className="size-6 rounded-full"
          />

          <ArrowLeftRight className="size-5" color="#FFF" />
        </Link>
      </Button>
    </div>
  );
};

export default TranslateFloatButton;
