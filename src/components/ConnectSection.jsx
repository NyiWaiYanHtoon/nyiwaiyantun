import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

import Section from "./Section";

const ConnectSection = ({ data, email, stickyTitle }) => {
  const { heading, headingAccent, subheading, ctaLabel, socialLinks } = data;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="connect" title={stickyTitle}>
      <div className="mb-12 mx-8 md:mx-58">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
          <br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-lg leading-relaxed">{subheading}</p>
      </div>

      <div className="flex flex-col items-start gap-6 mx-8 md:mx-58">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>

          {/* Email display + copy */}
          <div className="inline-flex items-center gap-2 text-xs text-muted">
            <span>{email}</span>
            <button
              onClick={handleCopy}
              className="text-muted hover:text-text transition-colors"
              aria-label="Copy email"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-text transition-colors"
            >
              {label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ConnectSection;
