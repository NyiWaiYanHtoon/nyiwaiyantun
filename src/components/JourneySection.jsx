import Section from "@/components/my-ui/Section";
import ExperienceTab from "@/components/my-ui/ExperienceTab";
import EducationTab from "@/components/my-ui/EducationTab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const JourneySection = ({ data, stickyTitle }) => {
  const { heading, headingAccent, subheading, experiences, education } = data;

  return (
    <Section id="experience" title={stickyTitle}>
      {/* Header */}
      <div className="mb-6 mx-8 md:mx-20 lg:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
          <br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed mb-6">{subheading}</p>

        {/* Tabs */}
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="bg-background border border-border rounded-sm p-1">
            <TabsTrigger value="experience" className="data-active:bg-white! data-active:text-black! rounded-sm">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="data-active:bg-white! data-active:text-black! rounded-sm">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-0">
            <ExperienceTab experiences={experiences} />
          </TabsContent>
          <TabsContent value="education" className="mt-0">
            <EducationTab education={education} />
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default JourneySection;
