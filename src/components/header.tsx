"use client";

import { useNavigationOptions } from "@/shared/mocks/navigationOptions";
import clsx from "clsx";
import { ArrowLeftRight, CodeXml } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("TranslateOption");

  const navigationOptions = useNavigationOptions();

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 50;

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

    setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);


  return (
    <header
      className={clsx(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full mx-auto flex justify-between items-center ring-1 transition-all duration-300 will-change-transform will-change-opacity",
        "px-6",
        isScrolled ? "max-w-[1024px] py-6 mt-6 rounded-3xl bg-[#1B1E23] ring-[#999999]" : "max-w-[1536px] py-9 ring-transparent",
        !isVisible ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
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
          className={clsx("text-primary-blue transition-all duration-300", {
            "w-10 h-10": !isScrolled,
            "w-8 h-8": isScrolled,
          })}
          strokeWidth={3}
        />

        <h1
          className={clsx("text-white font-bold transition-all duration-300", {
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
        {navigationOptions.map((option) => (
          <Link
            href={option.href}
            key={option.id}
            onMouseEnter={() => setHoveredId(option.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`transition-opacity duration-500 ${hoveredId && hoveredId !== option.id
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

        <Button
          variant="translate"
          size="translate"
          className={clsx("inline-flex items-center", {
            hidden: isScrolled,
          })}
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
      </nav>
    </header>
  );
};

export default Header;
