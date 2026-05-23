import Section from "./Section";

const AboutSection = ({ data, stickyTitle }) => {
  const { heading, headingAccent, bio, photo, facts, colleagueTags } = data;

  return (
    <Section id="meet-you" title={stickyTitle}>
      <div className="mb-12 mx-0 md:mx-20 lg:mx-58">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {heading} <span className="text-primary">{headingAccent}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mx-0 md:mx-20 lg:mx-58">

        {/* Left — photo + bio */}
        <div className="flex flex-col gap-6">
          <div className="w-full aspect-[4/3] rounded-2xl bg-text/5 border border-text/10 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Romand" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                Your photo here
              </div>
            )}
          </div>
          {bio.map((paragraph, i) => (
            <p key={i} className="text-muted leading-relaxed text-sm md:text-base">{paragraph}</p>
          ))}
        </div>

        {/* Right — facts table */}
        <div className="flex flex-col divide-y divide-text/10">
          {facts.map(({ label, value }) => (
            <div key={label} className="py-4 flex flex-col sm:grid sm:grid-cols-[140px_1fr] gap-1 sm:gap-5 items-start">
              <span className="text-xs text-muted tracking-[0.15em] uppercase font-mono">
                {label}
              </span>
              <span className="text-text text-sm leading-relaxed">{value}</span>
            </div>
          ))}

          <div className="py-5">
            <span className="text-xs text-muted tracking-[0.15em] uppercase font-mono block mb-4">
              How Colleagues Describe Me
            </span>
            <div className="flex flex-wrap gap-2">
              {colleagueTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-text/20 text-xs text-muted hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;