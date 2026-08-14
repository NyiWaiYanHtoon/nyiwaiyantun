import { ArrowRight } from "lucide-react";
import TerminalCard from "./TerminalCard";

const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.558v11.452H3.555V9zM22.225 0H1.771C.792 0 0  .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
};

const HeroSection = ({ data }) => {
  const {
    badge,
    name,
    bio,
    terminal,
    socials = [],
    resumeUrl,
    photoUrl,
  } = data;

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 bg-background overflow-hidden">

      <div className="relative w-full max-w-6xl mx-auto pr-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center">
        {/* Left column */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-primary text-xs font-semibold mb-8">
            {badge}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase mb-8 leading-none">
            {name}
          </h1>

          <div className="space-y-4 max-w-lg mb-10">
              <p className="text-base text-muted leading-relaxed">
                {bio}
              </p>
          </div>

          {/* Terminal card */}
          <TerminalCard command={terminal.command} answer={terminal.answer} />

          {/* Socials + Resume */}
          <div className="flex items-center gap-4">
            {socials.map(({ type, url }) => {
              const Icon = socialIcons[type];
              return (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-primary hover:text-primary transition-colors"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}

            {resumeUrl && (
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold text-sm hover:brightness-110 transition"
              >
                Download Resume
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Right column: photo */}
        {photoUrl && (
          <div className="justify-self-center lg:justify-self-end">
            <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-[0_0_60px_-10px_rgba(251,191,36,0.6)]">
              <img
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
