"use client";

import { socialLinks } from "@/shared/mocks/socialLinks";
import EmailButton from "./emailButton";
import Link from "next/link";
import Image from "next/image";
import CurriculumDownloadButton from "./curriculumDownload";
import { CurriculumDownloadButtonEnum } from "@/@types/curriculumDownloadButtonEnum";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Card, CardContent } from "./ui/card";
import { useContactMeForm } from "./contactMeForm";
import { Input } from "./ui/input";
import { Manrope } from "next/font/google";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactMe = () => {
  const form = useContactMeForm();

  return (
    <section id="contact" className="py-10 px-6 flex flex-col w-full gap-10">
      <aside className="flex flex-col gap-4">
        <div className="w-full max-w-[96px] bg-white h-2" />
        <h1 className="text-white text-xgg font-bold">Entre em contato</h1>
      </aside>

      <aside className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-[18px]">
            <h3 className="text-xss font-bold text-white">
              Vamos criar um novo projeto?
            </h3>

            <p className="text-xss text-text-secondary leading-8">
              Gosto de transformar ideias em interfaces modernas, funcionais e
              com personalidade própria. Se você tem um projeto em mente e quer
              tirar do papel com qualidade e criatividade, entre em contato.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xss font-bold text-white">Meios de contato</h3>

            <div className="flex flex-col gap-6">
              <div className="flex gap-5 items-center">
                {socialLinks.map((link) =>
                  link.id === "email" ? (
                    <EmailButton key="email" />
                  ) : (
                    <Link
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.icon}
                        alt={link.alt}
                        height={28}
                        width={28}
                      />
                    </Link>
                  )
                )}
              </div>

              <CurriculumDownloadButton
                type={CurriculumDownloadButtonEnum.ROW}
              />
            </div>
          </div>
        </div>

        <Form {...form}>
          <form>
            <Card className="p-0 w-full px-6 py-10 rounded-[8px] bg-light-boxes border-0">
              <CardContent className="p-0 flex flex-col gap-9">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="gap-2.5">
                      <FormLabel>
                        <span className="text-xss text-white">
                          Informe seu nome
                        </span>
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Digite seu nome..."
                          className={`${manrope.className} border-[#445166] px-3 py-6 text-[#93A2B7] placeholder:text-[#93A2B7]`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="gap-2.5">
                      <FormLabel>
                        <span className="text-xss text-white">
                          Seu endereço de e-mail
                        </span>
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Digite seu email..."
                          className={`${manrope.className} border-[#445166] px-3 py-6 text-[#93A2B7] placeholder:text-[#93A2B7]`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="gap-2.5">
                      <FormLabel>
                        <span className="text-xss text-white">
                          O assunto da sua mensagem
                        </span>
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Digite o assunto..."
                          className={`${manrope.className} border-[#445166] px-3 py-6 text-[#93A2B7] placeholder:text-[#93A2B7]`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="gap-2.5">
                      <FormLabel>
                        <span className="text-xss text-white">
                          Escreva sua mensagem para mim
                        </span>
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          placeholder="Digite a mensagem..."
                          className={`${manrope.className} border-[#445166] h-[140px] px-3 py-3 text-[#93A2B7] placeholder:text-[#93A2B7] resize-none`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="underline" size="underline">
                  ENVIAR MENSAGEM
                  <ArrowRight className="size-5" color="#FFF" />
                </Button>
              </CardContent>
            </Card>
          </form>
        </Form>
      </aside>
    </section>
  );
};

export default ContactMe;
