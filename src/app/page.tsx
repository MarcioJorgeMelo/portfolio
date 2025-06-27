import AboutSection from "@/components/aboutSection";
import ContactMeSection from "@/components/contactMeSection";
import ExperienceSection from "@/components/experienceSection";
import PresentationSection from "@/components/presentationSection";
import ProjectsSection from "@/components/projectsSection";

export default function Portfolio() {
  return (
    <main>
      <PresentationSection />

      <ExperienceSection />

      <ProjectsSection />

      <AboutSection />

      <ContactMeSection />
    </main>
  );
}
