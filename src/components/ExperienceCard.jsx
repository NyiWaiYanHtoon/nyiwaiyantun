const ExperienceCard = ({ period, position, org, description, bgColor, textColor, borderColor, logo }) => {
  return (
    <div 
    className={`snap-start shrink-0 w-[90vw] md:w-[50vw] lg:w-[30vw] rounded-4xl border p-8 flex flex-col min-h-[480px]`}
    style={{ backgroundColor: bgColor, borderColor }}>
      
      {/* Logo — fixed at top */}
      <div className="mb-12">
        {logo ? (
          <img src={logo} alt={org} className="h-25 w-auto object-contain" />
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
      <div style={{color: textColor}} className="pr-30">
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