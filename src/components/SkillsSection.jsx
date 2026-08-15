import Section from "./Section";
import { Badge } from "@/components/ui/Badge";

const SkillsSection = ({ data, stickyTitle }) => {
  const { heading, headingAccent, subheading, categories } = data;

  return (
    <Section id="what-i-do" title={stickyTitle}>
      <div className="mb-16 mx-8 md:mx-58">
        <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">{subheading}</p>
      </div>

      <div className="mx-8 md:mx-58 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
        {categories.map(({ label, tags }) => (
          <div
            key={label}
            className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card/60 p-4 shadow-[0_0_0_1px_rgba(26,184,184,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.03] sm:p-5"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:text-sm">
              {label}
            </h3>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full border-primary/30 bg-primary/5 px-3 py-2 text-sm font-normal text-primary transition-colors hover:bg-primary/10 sm:px-5 sm:py-3.5 sm:text-sm cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;