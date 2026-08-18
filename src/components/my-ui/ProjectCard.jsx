import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ name, subtitle, period, description, bullets, tags, links, color, image }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const primaryLink = links?.[links.length - 1]; // Get the last link as the primary link
  
  // this makes the round object follow the cursor movement
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  const handleClick = () => {
    if (primaryLink?.href) {
      window.open(primaryLink.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 p-0">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row sm:items-center">
              <div
                className="group/image relative w-full sm:w-1/4 md:w-1/3 aspect-[1/1] overflow-hidden border-b cursor-none"
              onMouseMove={handlePointerMove}
              // this makes the circle visible when hovering  
              onMouseEnter={() => setCursor((prev) => ({ ...prev, visible: true }))}
              onMouseLeave={() => setCursor((prev) => ({ ...prev, visible: false }))}
              onClick={handleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleClick();
                }
              }}
            >
              <div className={`${color} h-full w-full`}>
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted text-xs px-3 text-center">
                    {name}
                  </div>
                )}
              </div>

              {primaryLink && (
                <div
                  className="pointer-events-none absolute left-0 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/60 bg-background/80 text-primary shadow-lg transition-opacity duration-200"
                  style={{
                    left: `${cursor.x}px`,
                    top: `${cursor.y}px`,
                    width: 'min(18vw,92px)',
                    height: 'min(18vw,92px)',
                    opacity: cursor.visible ? 1 : 0,
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center leading-none">
                    <span className="text-[7px] font-medium uppercase tracking-[0.25em]">{primaryLink.label == "Live" ? "Go" : "Open"}</span>
                    <span className="mt-1 text-[9px] uppercase tracking-[0.12em] break-words px-2">
                      {primaryLink.label == "GitHub" ? "README" : primaryLink.label}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2 px-4 sm:px-6 md:px-8 mt-0">
              <Badge className="rounded-full font-mono text-[11px] cursor-pointer text-muted bg-background/10 border border-text/10 px-2 py-1.5">
                {period}
              </Badge>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {name}<span className="text-primary"> · </span>{subtitle}
              </h3>

              <p className="text-muted text-sm leading-relaxed">{description}</p>

              <ul className="flex flex-col gap-2">
                {(bullets ?? []).map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end">
                <div className="flex flex-wrap gap-2 mt-1">
                  {(tags ?? []).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full text-xs font-normal text-muted tracking-wide uppercase"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-1">
                  {(links ?? []).map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text hover:text-primary transition-colors border-b border-text/20 hover:border-primary pb-0.5"
                    >
                      {label}
                      <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;