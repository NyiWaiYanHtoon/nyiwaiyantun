import Section from "@/components/my-ui/Section";
import ExperienceTab from "@/components/my-ui/ExperienceTab";
import EducationTab from "@/components/my-ui/EducationTab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const JourneySection = ({ data, stickyTitle }) => {
  const { heading, headingAccent, subheading, experiences } = data;

  return (
    <Section id="experience" title={stickyTitle}>

      {/* Header */}
      <div className="mb-6 mx-8 md:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed mb-6">{subheading}</p>

        {/* Tabs */}
        <Tabs defaultValue="experience" className="w-full">
          {/* <TabsList>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList> */}

          <TabsContent value="experience" className="mt-0">
            <ExperienceTab experiences={experiences} />
          </TabsContent>
          <TabsContent value="education" className="mt-0">
            <EducationTab />
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default JourneySection;
