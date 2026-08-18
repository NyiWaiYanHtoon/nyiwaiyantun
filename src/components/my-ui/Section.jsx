const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="px-8 md:px-10 py-24 relative"
    >
      {/* Sticky title */}
      {title && (
        <div className="sticky top-17 z-10 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-small text-primary tracking-tight uppercase font-mono">
              {title}
            </span>
          </div>
        </div>
      )}

      {/* Section content */}
      {children}
    </section>
  );
};

export default Section;
