import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactMeSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z.string().min(1, { message: "O email é obrigatório" }),
  subject: z.string().min(1, { message: "O assunto é obrigatório" }),
  message: z.string().min(1, { message: "A mensagem é obrigatória" }),
});

export type ContactMeFormData = z.infer<typeof contactMeSchema>;

export function useContactMeForm() {
  return useForm<ContactMeFormData>({
    resolver: zodResolver(contactMeSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
}
