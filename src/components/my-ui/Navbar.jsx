import { useState } from "react";
import { X, Menu } from "lucide-react";
import ReactDOM from "react-dom";

const Navbar = ({ nav_links, activeLink, onLinkClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="tracking-[0.25em] text-sm text-text cursor-pointer transition-opacity uppercase font-mono"
      >
        Romand<span className="text-primary">.</span>
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {nav_links.map(({ label, href }) => (
          <li key={href}>
            <button
              onClick={() => onLinkClick(href)}
              className={`uppercase text-xs tracking-[0.12em] transition-colors duration-200 font-mono cursor-pointer hover:text-text ${activeLink === href ? "text-text" : "text-muted"}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-1 text-text hover:opacity-70 transition-opacity"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu */}
      {menuOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 bg-background/95 flex flex-col items-center justify-center gap-8">
            <button
              className="absolute top-5 right-8 p-1 text-text hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {nav_links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => {
                  onLinkClick(href);
                  setMenuOpen(false);
                }}
                className="text-2xl font-medium text-text hover:text-primary transition-colors font-mono"
              >
                {label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Navbar;