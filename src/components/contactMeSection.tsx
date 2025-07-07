"use client";

import { socialLinks } from "@/shared/mocks/socialLinks";
import Link from "next/link";
import CurriculumDownloadButton from "./curriculumDownload";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardContent } from "./ui/card";
import { ContactMeFormData, useContactMeForm } from "./contactMeForm";
import { Input } from "./ui/input";
import { Manrope } from "next/font/google";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import clsx from "clsx";
import { useState } from "react";
import { useTranslations } from "next-intl";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactMe = () => {
  const t = useTranslations("ContactMe");

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const form = useContactMeForm();

  function onSubmit(values: ContactMeFormData) {
    console.log(values);
  }

  return (
    <section
      id="contact"
      className="py-10 px-6 flex flex-col w-full max-w-[1536px] mx-auto gap-10 sm:flex-row sm:py-28 sm:justify-between"
    >
      <aside className="flex flex-col gap-4 sm:max-w-[565px]">
        <div className="w-full max-w-[96px] bg-white h-2 sm:max-w-[148px]" />
        <h1 className="text-white text-xgg font-bold sm:text-[52px]">
          {t("title")}
        </h1>

        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-[18px]">
            <h3 className="text-xss font-bold text-white sm:text-[20px]">
              {t("subtitle")}
            </h3>

            <p className="text-xss text-text-secondary leading-8">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xss font-bold text-white sm:text-[20px]">
              {t("contactMe-area")}
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex gap-5 items-center">
                {socialLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    target={link.id === "email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredId(link.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`transition-opacity duration-500 ${
                      hoveredId && hoveredId !== link.id
                        ? "opacity-30"
                        : "opacity-100"
                    }`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </Link>
                ))}
              </div>

              <CurriculumDownloadButton
                type={CurriculumDownloadButtonEnum.ROW}
              />
            </div>
          </div>
        </div>
      </aside>

      <aside className="w-full flex flex-col gap-10 sm:w-fit">
        <section id="emailTo">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="p-0 w-full px-6 py-10 rounded-[8px] bg-light-boxes border-0 sm:p-10 sm:w-[492px]">
                <CardContent className="p-0 flex flex-col gap-8">
                  <div className="gap-2.5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <span className="text-xss text-white pb-2.5">
                              {t("label-name")}
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("placeholder-name")}
                              className={clsx(
                                `${manrope.className} px-3 py-6 rounded-[10px] text-[#93A2B7] placeholder:text-[#93A2B7]`,
                                "focus-visible:border-white focus-visible:ring-white/70 focus-visible:ring-[1px]",
                                form.formState.errors.name
                                  ? "border-[#C42222] focus-visible:ring-[#C42222]"
                                  : "border-[#445166]"
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#C42222]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="gap-2.5">
                        <FormLabel>
                          <span className="text-xss text-white pb-2.5">
                            {t("label-email")}
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder={t("placeholder-email")}
                            type="email"
                            className={clsx(
                              `${manrope.className} px-3 py-6 rounded-[10px] text-[#93A2B7] placeholder:text-[#93A2B7]`,
                              "focus-visible:border-white focus-visible:ring-white/70 focus-visible:ring-[1px]",
                              form.formState.errors.name
                                ? "border-[#C42222] focus-visible:ring-[#C42222]"
                                : "border-[#445166]"
                            )}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage className="text-[#C42222]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="gap-2.5">
                        <FormLabel>
                          <span className="text-xss text-white pb-2.5">
                            {t("label-subject")}
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder={t("placeholder-subject")}
                            className={clsx(
                              `${manrope.className} px-3 py-6 rounded-[10px] text-[#93A2B7] placeholder:text-[#93A2B7]`,
                              "focus-visible:border-white focus-visible:ring-white/70 focus-visible:ring-[1px]",
                              form.formState.errors.name
                                ? "border-[#C42222] focus-visible:ring-[#C42222]"
                                : "border-[#445166]"
                            )}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage className="text-[#C42222]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="gap-2.5">
                        <FormLabel>
                          <span className="text-xss text-white pb-2.5">
                            {t("label-message")}
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Textarea
                            placeholder={t("placeholder-message")}
                            className={clsx(
                              `${manrope.className} border-[#445166] h-[140px] px-3 py-3 text-[#93A2B7] placeholder:text-[#93A2B7] resize-none`,
                              "focus-visible:border-white focus-visible:ring-white/70 focus-visible:ring-[1px]",
                              form.formState.errors.name
                                ? "border-[#C42222] focus-visible:ring-[#C42222]"
                                : "border-[#445166]"
                            )}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage className="text-[#C42222]" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="underline"
                    size="underline"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t("send-message")}
                      <ArrowRight
                        className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                        color="#FFF"
                      />
                    </span>

                    {/* Underline animado */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                  </Button>
                </CardContent>
              </Card>
            </form>
          </Form>
        </section>
      </aside>
    </section>
  );
};

export default ContactMe;
