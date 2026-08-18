import SkillCard from "@/components/my-ui/SkillCard";
import Section from "@/components/my-ui/Section";

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

      <div className="mx-8 md:mx-58 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:items-stretch">
        {(categories ?? []).map((category) => (
          <SkillCard key={category.label} skill={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;