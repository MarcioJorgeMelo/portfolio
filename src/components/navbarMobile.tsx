"use client"

import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { links } from "@/shared/mocks/links";
import clsx from "clsx";

const NavbarMobile = () => {
  const activeSection = useActiveSection(links.map(item => { return item.id }));

  return (
    <nav className="w-full bg-dark-background px-6 py-3.5 flex gap-6 items-center justify-between border-t border-[#2D343F]">
      {links.map(link => (
        <a
          key={link.id}
          href={link.href}
          className={clsx(
            "w-[57px] flex flex-col items-center justify-center gap-1.5",
            activeSection === link.id ? "text-secondary-blue" : "text-white"
          )}
        >
          <link.icon size={32} />
          <p className="text-[10px]">{link.label}</p>
        </a>
      ))}
    </nav>
  );
};

export default NavbarMobile;
