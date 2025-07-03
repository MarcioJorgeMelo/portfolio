"use client";

import { navbarOptions } from "@/shared/mocks/navbarOptions";
import clsx from "clsx";
import { ArrowLeftRight, ChevronDown, CodeXml } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languagesOptions } from "@/shared/mocks/languageOptions";

const Header = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [language, setLanguage] = useState("BRA");

  const selectedLanguage = languagesOptions.find(
    (lang) => lang.label === language
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      const isScrollingDown =
        currentScrollY > lastScrollY && currentScrollY > 50;

      if (isScrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          if (window.scrollY < 50) return;
          setIsVisible(false);
        }, 5000);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full mx-auto flex justify-between items-center transition-all duration-300",
        {
          "max-w-[1536px] pr-6 py-9": !isScrolled,
          "max-w-[1024px] p-6 rounded-3xl mt-6 bg-[#1B1E23] ring-1 ring-[#999999]":
            isScrolled,
          "opacity-0 -translate-y-full pointer-events-none": !isVisible,
          "opacity-100 translate-y-0": isVisible,
        }
      )}
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }}
      onMouseLeave={() => {
        if (window.scrollY > 50) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 5000);
        }
      }}
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-3 hover:scale-105 duration-300"
      >
        <CodeXml
          className={clsx("text-primary-blue", {
            "w-10 h-10": !isScrolled,
            "w-8 h-8": isScrolled,
          })}
          strokeWidth={3}
        />

        <h1
          className={clsx("text-white font-bold", {
            "text-[28px]": !isScrolled,
            "text-2xl": isScrolled,
          })}
        >
          Márcio Jorge
        </h1>
      </Link>

      <nav
        className={clsx("relative flex items-center", {
          "gap-9": !isScrolled,
          "gap-6": isScrolled,
        })}
      >
        {navbarOptions.map((option) => (
          <Link
            href={option.href}
            key={option.id}
            onMouseEnter={() => setHoveredId(option.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`transition-opacity duration-500 ${
              hoveredId && hoveredId !== option.id
                ? "opacity-30"
                : "opacity-100"
            }`}
          >
            <h3
              className={clsx(
                "text-text-secondary font-medium hover:text-white",
                { "text-[20px]": !isScrolled, "text-lg": isScrolled }
              )}
            >
              {option.label}
            </h3>
          </Link>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="translate"
              size="translate"
              className={clsx({
                hidden: isScrolled,
                "inline-flex items-center": true,
              })}
            >
              <Image
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                src={selectedLanguage?.image!}
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                alt={selectedLanguage?.alt!}
                className="size-6 rounded-full"
              />

              <ChevronDown className="size-5" color="#FFF" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-fit bg-[#292F39] border-0"
            sideOffset={8}
          >
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={setLanguage}
            >
              {languagesOptions
                .filter((languageOption) => languageOption.label !== language)
                .map((languageOption) => (
                  <DropdownMenuRadioItem
                    value={languageOption.label}
                    className="w-fit p-0 px-2 py-1"
                    key={languageOption.id}
                  >
                    <Image
                      src={languageOption.image}
                      alt={languageOption.alt}
                      className="size-6 rounded-full"
                    />
                    <ArrowLeftRight className="size-5 rounded-full text-white" />
                  </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Header;
