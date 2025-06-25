import AboutSection from "@/components/aboutSection";
import ExperienceSection from "@/components/experienceSection";
import NavbarMobile from "@/components/navbarMobile";
import PresentationSection from "@/components/presentationSection";
import ProjectsSection from "@/components/projectsSection";

export default function Portfolio() {
  return (
    <main>
      <PresentationSection />

      <ExperienceSection />

      <ProjectsSection />

      <AboutSection />

      <NavbarMobile />
    </main>
  );
}
