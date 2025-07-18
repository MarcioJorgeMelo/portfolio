"use client";

import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useNavigationOptions } from "@/shared/mocks/navigationOptions";
import clsx from "clsx";

const NavbarMobile = () => {

  const navigationOptions = useNavigationOptions();

  const activeSection = useActiveSection(
    navigationOptions.map((option) => {
      return option.id;
    })
  );

  return (
    <nav className="w-full bg-dark-background px-6 py-3.5 flex gap-6 items-center justify-between border-t border-[#2D343F]">
      {navigationOptions.map((option) => (
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
