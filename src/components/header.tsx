"use client";

import { navbarOptions } from "@/shared/mocks/navbarOptions";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1536px] mx-auto flex justify-between items-center px-6 py-9 transition-all duration-300 ${
        isScrolled
          ? "w-[1024px] p-6 rounded-3xl mt-6 bg-[#1B1E23] backdrop-blur-md shadow-lg ring-1 ring-[#999999]"
          : ""
      }`}
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-3 hover:scale-110 duration-300"
      >
        <CodeXml className="w-10 h-10 text-primary-blue" strokeWidth={3} />

        <h1 className="text-[28px] text-white font-bold">Márcio Jorge</h1>
      </Link>

      <nav className="flex items-center gap-9">
        {navbarOptions.map((option) => (
          <Link
            href={option.href}
            key={option.id}
            onMouseEnter={() => setHoveredId(option.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`transition-opacity duration-300 ${
              hoveredId && hoveredId !== option.id
                ? "opacity-30"
                : "opacity-100"
            }`}
          >
            <h3 className="text-[20px] text-text-secondary font-medium hover:text-white">
              {option.label}
            </h3>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
