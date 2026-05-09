import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "What I Do", href: "what-i-do" },
  { label: "Selected Work", href: "selected-work" },
  { label: "Experience", href: "experience" },
  { label: "Nice to Meet You", href: "meet-you" },
  { label: "Let's Connect", href: "connect" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-[#0e0e0e] text-[#f0ece3] min-h-screen font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-transparent/30">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="tracking-[0.25em] text-lg text-[#f0ece3] hover:opacity-70 transition-opacity uppercase"
        >
          Romand<span className="text-[#c8f060]">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`uppercase text-sm tracking-[0.12em] transition-colors duration-200 ${
                  active === href
                    ? "text-[#c8f060]"
                    : "text-[#a09e97] hover:text-[#f0ece3]"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-[#f0ece3] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f0ece3] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f0ece3] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e0e0e]/95 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => { scrollTo(href); setMenuOpen(false); }}
              className="text-2xl font-medium text-[#f0ece3] hover:text-[#c8f060] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end px-8 md:px-20 pb-24 pt-32">
        <p className="text-sm tracking-[0.2em] text-[#c8f060] uppercase mb-4">Available for work</p>
        <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tight mb-6">
          Nyi Wai Yan Tun 
        </h1>
        <p className="text-xl md:text-2xl text-[#a09e97] max-w-xl">
          Designer & Developer crafting thoughtful digital experiences.
        </p>
        <div className="mt-12 h-px w-full bg-white/10" />
      </section>

      {/* ── WHAT I DO ── */}
      <Section id="what-i-do" label="01" title="What I Do">
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["UI / UX Design", "Frontend Dev", "Branding"].map((s) => (
            <div key={s} className="border border-white/10 rounded-xl p-8 hover:border-[#c8f060]/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#c8f060]/20 mb-6" />
              <h3 className="text-lg font-semibold mb-2">{s}</h3>
              <p className="text-[#a09e97] text-sm leading-relaxed">
                A short description of what you do in this area. Keep it punchy and honest.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SELECTED WORK ── */}
      <Section id="selected-work" label="02" title="Selected Work">
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {["Project Alpha", "Project Beta", "Project Gamma", "Project Delta"].map((p, i) => (
            <div
              key={p}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#c8f060]/40 transition-all cursor-pointer"
            >
              <div className={`w-full h-48 ${i % 2 === 0 ? "bg-[#c8f060]/10" : "bg-white/5"}`} />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{p}</h3>
                <p className="text-[#a09e97] text-sm">Design · Development</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" label="03" title="My Experience">
        <div className="mt-10 space-y-0">
          {[
            { role: "Senior Designer", company: "Studio ABC", years: "2022 – Present" },
            { role: "UI Developer", company: "Agency XYZ", years: "2020 – 2022" },
            { role: "Freelance", company: "Various Clients", years: "2018 – 2020" },
          ].map((exp, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-6 border-b border-white/10 group hover:pl-2 transition-all"
            >
              <div>
                <p className="font-semibold text-lg group-hover:text-[#c8f060] transition-colors">{exp.role}</p>
                <p className="text-[#a09e97] text-sm mt-0.5">{exp.company}</p>
              </div>
              <span className="text-[#a09e97] text-sm mt-1 shrink-0">{exp.years}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── NICE TO MEET YOU ── */}
      <Section id="meet-you" label="04" title="Nice to Meet You">
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-[#a09e97] leading-relaxed">
            <p>
              Hey! I'm a designer-developer hybrid based somewhere nice. I care
              deeply about craft, clarity, and making things that actually work for people.
            </p>
            <p>
              When I'm not pushing pixels, I'm probably reading, making coffee, or
              going on long walks while listening to podcasts.
            </p>
          </div>
          <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a09e97] text-sm">
            Your photo here
          </div>
        </div>
      </Section>

      {/* ── LET'S CONNECT ── */}
      <Section id="connect" label="05" title="Let's Connect">
        <div className="mt-10 flex flex-col items-start gap-6">
          <p className="text-[#a09e97] max-w-lg leading-relaxed">
            Got a project in mind, want to collaborate, or just say hi? My inbox is always open.
          </p>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c8f060] text-[#0e0e0e] font-semibold text-sm hover:bg-[#d9ff6e] transition-colors"
          >
            Say Hello →
          </a>
          <div className="flex gap-6 mt-4">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a key={s} href="#" className="text-sm text-[#a09e97] hover:text-[#f0ece3] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-20 py-8 border-t border-white/10 flex items-center justify-between text-[#a09e97] text-sm">
        <span>© 2026 YourName</span>
        <span>Designed & built by you</span>
      </footer>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="px-8 md:px-20 py-24 border-t border-white/10">
      <div className="flex items-baseline gap-4">
        <span className="text-xs text-[#c8f060] tracking-widest font-mono">{label}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}