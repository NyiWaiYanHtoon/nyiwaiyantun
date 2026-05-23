import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ data , stickyTitle}) => {
  const { heading, headingAccent, headingSuffix, subheading, items } = data;

  return (
    <Section id="experience" title={stickyTitle}>
      <div className="mb-16 mx-8 md:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span> {headingSuffix}
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 -mx-8 px-8 md:-mx-10 md:px-10 snap-x snap-mandatory scrollbar-hide">
        {items.map((exp) => (
          <ExperienceCard key={exp.org} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;