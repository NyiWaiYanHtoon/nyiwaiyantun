import Section from "@/components/my-ui/Section";
import ProjectCard from "@/components/my-ui/ProjectCard";


const SelectedWorkSection = ({ data, stickyTitle }) => {
  const { heading, headingAccent, subheading, projects } = data;
  
  return (
    <Section id="selected-work" title={stickyTitle}>

      {/* Header */}
      <div className="mb-16 mx-8 md:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      {/* Projects list */}
      <div className="relative mx-8 md:mx-58 flex flex-col gap-10">

        {projects.map(({ id, name, subtitle, period, description, bullets, tags, links, color, image }) => (
          <ProjectCard
            key={id}
            name={name}
            subtitle={subtitle}
            period={period}
            description={description}
            bullets={bullets}
            tags={tags}
            links={links}
            color={color}
            image={image}
          />
        ))}
      </div>
    </Section>
  );
};

export default SelectedWorkSection;