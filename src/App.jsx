import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import data from "./data.json";

const NAV_LINKS = [
  { label: "What I Do", href: "what-i-do" },
  { label: "Selected Work", href: "selected-work" },
  { label: "Experience", href: "experience" },
  { label: "Nice to Meet You", href: "meet-you" },
  { label: "Let's Connect", href: "connect" },
];

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(href);
        },
        // rootMargin: push the trigger point 20% down from the top so tall
        // sections (like Selected Work) register correctly
        { threshold: 0, rootMargin: "-20% 0px -60% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-background/60 border-b border-text/5">
        <Navbar
          nav_links={NAV_LINKS}
          activeLink={active}
          onLinkClick={smoothScrollTo}
        />
      </nav>

      {/* ── SECTIONS ── */}
      <HeroSection data={data.hero} />
      <SkillsSection data={data.skills} />
      <SelectedWorkSection data={data.work} />
      <ExperienceSection data={data.experience} />
      <AboutSection data={data.about} />
      <ConnectSection data={data.connect} email={data.meta.email} />

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-20 py-8 border-t border-text/10 flex items-center justify-between text-muted text-xs">
        <span>{data.meta.copyright}</span>
        <span>{data.meta.footerNote}</span>
      </footer>
    </div>
  );
}
