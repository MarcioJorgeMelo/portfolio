import translateEnglish from "../../../public/translateEnglish.png";
import translatePortuguese from "../../../public/translatePortuguese.png";
import translateEspanish from "../../../public/translateEspanish.png";
import { StaticImageData } from "next/image";

interface languagesOptionsProps {
  id: string;
  label: string;
  image: StaticImageData;
  alt: string;
}

export const languagesOptions: languagesOptionsProps[] = [
  {
    id: "portugues",
    label: "BRA",
    image: translatePortuguese,
    alt: "Traduzir para português",
  },
  {
    id: "english",
    label: "EUA",
    image: translateEnglish,
    alt: "Translate to english",
  },
  {
    id: "spanish",
    label: "ESP",
    image: translateEspanish,
    alt: "Traducir al español",
  },
];
