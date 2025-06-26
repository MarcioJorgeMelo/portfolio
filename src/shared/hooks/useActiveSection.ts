"use client"

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(entry => entry.isIntersecting);
                if (visible?.target.id) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0.1,
            }
        );

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [sectionIds]);

    return activeSection;
}
