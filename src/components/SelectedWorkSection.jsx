import { useState, useEffect, useRef } from "react";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";

const SelectedWorkSection = ({ data }) => {
  const { heading, headingAccent, subheading, projects } = data;
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const projectRefs = useRef({});

  useEffect(() => {
    const observers = projects.map(({ id }) => {
      const el = projectRefs.current[id];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveProject(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [projects]);

  const scrollToProject = (id) =>
    projectRefs.current[id]?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section id="selected-work" title="Selected Work">

      {/* Header */}
      <div className="mb-16 mx-8 md:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      {/* Sticky project nav */}
      <div className="hidden md:sticky top-20 z-20 md:flex justify-center mb-20">
        <div className="flex items-center gap-1 bg-background/80 border border-text/10 rounded-full px-2 py-2 backdrop-blur-md">
          {projects.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => scrollToProject(id)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 font-mono ${
                activeProject === id
                  ? "bg-primary text-background font-semibold"
                  : "text-muted hover:text-text"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects list */}
      <div className="flex flex-col gap-32">
        {projects.map(({ id, name, subtitle, org, period, description, bullets, tags, links, color, image }) => (
          <div
            key={id}
            ref={(el) => (projectRefs.current[id] = el)}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Left — image */}
            <div className={`w-full aspect-[4/3] rounded-2xl ${color} border border-text/10 overflow-hidden`}>
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                  Project screenshot
                </div>
              )}
            </div>

            {/* Right — content */}
            <div className="flex flex-col gap-5">
              <p className="text-muted text-xs tracking-wide">{org} · {period}</p>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {name}<span className="text-primary"> · </span>{subtitle}
              </h3>

              <p className="text-muted text-sm leading-relaxed">{description}</p>

              <ul className="flex flex-col gap-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-text/20 text-xs text-muted tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-1">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text hover:text-primary transition-colors border-b border-text/20 hover:border-primary pb-0.5"
                  >
                    {label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SelectedWorkSection;