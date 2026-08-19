import { Separator } from "@/components/ui/separator";

const EducationTab = ({ education }) => {
  return (
    <>
      {education.map(
        (
          {
            id,
            logo,
            degree,
            fieldOfStudy,
            institution,
            location,
            dateRange,
            grade,
            description,
          },
          i,
        ) => (
          <div key={id}>
            {i > 0 && <Separator className="bg-text/10" />}

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8 py-8">
              {/* Left — degree */}
              <div className="flex-1">
                <h3 className="flex items-center gap-2.5 text-xl md:text-2xl font-semibold leading-tight">
                  {logo ? (
                    <img
                      src={logo}
                      alt={institution}
                      className="h-7 w-auto object-contain sm:h-8"
                    />
                  ) : (
                    <span className="text-xl md:text-2xl leading-none">•</span>
                  )}
                  {degree}
                </h3>

                <p className="text-muted text-sm mt-2">
                  {institution}
                  {location ? ` · ${location}` : ""}
                  {grade ? (
                    <>
                      {" · "}
                      {grade === "discontinued" ? (
                        <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500">
                          Discontinued
                        </span>
                      ) : (
                        grade
                      )}
                    </>
                  ) : null}
                </p>

                {description && (
                  <p className="text-muted text-sm leading-relaxed mt-4 max-w-2xl">
                    {description}
                  </p>
                )}
              </div>

              {/* Right — dates */}
              <div className="text-left sm:text-right shrink-0">
                <p className="text-sm font-semibold whitespace-nowrap">
                  {dateRange}
                </p>
                <p className="text-muted text-sm mt-1">{institution}</p>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
};

export default EducationTab;
