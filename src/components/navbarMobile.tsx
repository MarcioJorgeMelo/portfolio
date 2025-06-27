"use client";

import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { navbarOptions } from "@/shared/mocks/navbarOptions";
import clsx from "clsx";

const NavbarMobile = () => {
  const activeSection = useActiveSection(
    navbarOptions.map((option) => {
      return option.id;
    })
  );

  return (
    <nav className="w-full bg-dark-background px-6 py-3.5 flex gap-6 items-center justify-between border-t border-[#2D343F]">
      {navbarOptions.map((option) => (
        <a
          key={option.id}
          href={option.href}
          className={clsx(
            "w-[57px] flex flex-col items-center justify-center gap-1.5",
            activeSection === option.id ? "text-secondary-blue" : "text-white"
          )}
        >
          <option.icon size={32} />
          <p className="text-[10px]">{option.label}</p>
        </a>
      ))}
    </nav>
  );
};

export default NavbarMobile;
