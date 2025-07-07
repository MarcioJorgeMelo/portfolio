import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useContactMeForm() {
  const t = useTranslations("Form");

  const contactMeSchema = z.object({
    name: z.string().min(1, { message: t("name-message") }),
    email: z.string().min(1, { message: t("email-message") }),
    subject: z.string().min(1, { message: t("subject-message") }),
    message: z.string().min(1, { message: t("message-message") }),
  });

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

export type ContactMeFormData = z.infer<
  ReturnType<typeof createContactMeSchema>
>;

export function createContactMeSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    name: z.string().min(1, { message: t("name-message") }),
    email: z.string().min(1, { message: t("email-message") }),
    subject: z.string().min(1, { message: t("subject-message") }),
    message: z.string().min(1, { message: t("message-message") }),
  });
}
