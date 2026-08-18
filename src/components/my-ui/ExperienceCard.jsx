const ExperienceCard = ({ period, position, org, description, bgColor, textColor, borderColor, logo }) => {
  return (
    <div 
    className={`snap-start shrink-0 w-full max-w-[90vw] md:max-w-[50vw] lg:max-w-[30vw] rounded-4xl border p-6 md:p-8 flex flex-col min-h-[320px]`}
    style={{ backgroundColor: bgColor, borderColor }}>
      
      {/* Logo — fixed at top */}
      <div className="mb-12">
          {logo ? (
          <img src={logo} alt={org} className="h-20 sm:h-24 w-auto object-contain" />
        ) : (
          <div className="w-24 h-10 rounded-md bg-text/10 flex items-center justify-center">
            <span 
            className={`${textColor} text-xs font-bold tracking-widest`}
            style={{color: textColor}}
            >
              {org.slice(0, 7).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Spacer — pushes content down so all cards align at the bottom */}
      <div className="flex-1" />

      {/* Content — always starts at the same vertical position */}
      <div style={{color: textColor}} className="pr-6 md:pr-8">
        <p className="text-sm tracking-wide mb-4">{period}</p>
        <h3 className="text-4xl font-bold leading-tight mb-4">
          {position}
        </h3>
        <p className="leading-relaxed">{description}</p>
      </div>

    </div>
  );
};

export default ExperienceCard;