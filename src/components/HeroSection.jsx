import { Download } from "lucide-react";
import TerminalCard from "@/components/my-ui/TerminalCard";
import { Badge } from "@/components/ui/Badge";

const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
    {...props}
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
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-20 sm:py-24 bg-background overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* Left column */}
        <div className="w-full max-w-2xl">
          <Badge className="inline-flex items-center gap-2 px-2.5 py-1.5 sm:px-3.5 rounded-full border-primary/30 bg-primary/5 text-primary text-[10px] sm:text-xs font-medium tracking-wide hover:bg-primary/10 transition-colors mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {badge}
          </Badge>

          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white uppercase mb-5 sm:mb-6 md:mb-8 leading-[0.95]">
            {name}
          </h1>

          <div className="max-w-xl mb-6 sm:mb-8 md:mb-10">
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Terminal card */}
          <TerminalCard command={terminal.command} answer={terminal.answer} />

          {/* Socials + Resume */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {socials.map(({ type, url }) => {
              const Icon = socialIcons[type];
              return (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-primary hover:text-primary transition-colors"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}

            {resumeUrl && (
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-primary text-black font-semibold text-xs sm:text-sm hover:brightness-110 transition"
              >
                Download Resume
                <Download size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Right column: photo */}
        {photoUrl && (
          <div className="hidden justify-self-center lg:flex lg:justify-self-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-[0_0_60px_-10px_rgba(251,191,36,0.6)]">
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
