"use client";

import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";

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
      <MdEmail className="size-6 text-white" />
    </Button>
  );
};

export default EmailButton;
