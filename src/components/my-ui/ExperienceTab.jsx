import { Separator } from "@/components/ui/separator";

const ExperienceTab = ({ experiences }) => {
  return (
    <>
      {experiences.map(({ id, logo, title, employmentType, workMode, location, dateRange, company, description }, i) => (
        <div key={id}>
          {i > 0 && <Separator className="bg-text/10" />}

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8 py-8">
            {/* Left — role */}
            <div className="flex-1">
              <h3 className="flex items-center gap-2.5 text-xl md:text-2xl font-semibold leading-tight">
                {logo ? (
                  <img
                    src={logo}
                    alt={company}
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                ) : (
                  <span className="text-xl md:text-2xl leading-none">•</span>
                )}
                {title}
              </h3>

              <p className="text-muted text-sm mt-2">
                {employmentType} · {workMode} · {location}
              </p>

              <p className="text-muted text-sm leading-relaxed mt-4 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Right — dates + company */}
            <div className="text-left sm:text-right shrink-0">
              <p className="text-sm font-semibold whitespace-nowrap">{dateRange}</p>
              <p className="text-muted text-sm mt-1">{company}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceTab;
