"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import emailIcon from "../../public/Email.png";
import toast from "react-hot-toast";

const EmailButton = () => {
  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(
        "marciojorgemedeirosmelofilho@gmail.com"
      );

      toast.success("Email copiado com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erro ao copiar email");
    }
  }

  return (
    <Button variant="emailButton" size="emailButton" onClick={handleCopyEmail}>
      <Image src={emailIcon} alt="Ícone do Email" height={28} width={28} />
    </Button>
  );
};

export default EmailButton;
