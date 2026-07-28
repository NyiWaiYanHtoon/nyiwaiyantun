const HeroSection = ({ data }) => {
  const { badge, heading, highlightWord, bio, resumeUrl } = data;

  return (
    <section className="min-h-screen flex flex-col justify-end px-16 md:px-68 pb-24 pt-32">
      {/* <p className="text-xs tracking-[0.3em] text-primary uppercase mb-6">{badge}</p> */}
      <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-10">
        {heading.map((line, i) => {
          const parts = line.split(highlightWord);
          return (
            <span key={i}>
              {parts.length > 1 ? (
                <>
                  {parts[0]}
                  <span className="text-primary">{highlightWord}</span>
                  {parts[1]}
                </>
              ) : (
                line
              )}
              {i < heading.length - 1 && <br />}
            </span>
          );
        })}
      </h1>
      {bio.map((paragraph, i) => (
        <p key={i} className={`text-sm md:text-base text-muted max-w-lg leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}

      <a
        href={resumeUrl}
        download
        className="mt-8 inline-flex items-center gap-2 w-fit px-3 py-2 border border-primary text-primary text-xs font-medium tracking-wide rounded-sm hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
      >
        Download Resume
      </a>
    </section>
  );
};

export default HeroSection;