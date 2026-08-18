import { useEffect, useState } from "react";

const TerminalCard = ({ command, answer }) => {
  const phrases = Array.isArray(answer) ? answer : [answer ?? ""];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex % phrases.length] ?? "";

  useEffect(() => {
    if (!currentPhrase) {
      setDisplayText("");
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(nextText);
        return;
      }

      const nextText = currentPhrase.slice(0, displayText.length - 1);
      setDisplayText(nextText);

      if (nextText === "") {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting, phrases.length]);

  useEffect(() => {
    if (!currentPhrase || isDeleting) return;

    if (displayText === currentPhrase) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);

      return () => clearTimeout(pauseTimer);
    }
  }, [currentPhrase, displayText, isDeleting]);

  return (
    <div className="w-full max-w-lg rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden mb-10">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[10px] tracking-widest text-muted font-mono">
          &gt;_ SESSION
        </span>
      </div>
      <div className="px-5 py-5 font-mono">
        <p className="text-sm text-muted text-white/40">
          <span>~</span>{" "}
          <span className='text-amber-400'>{command}</span>
        </p>
        <p className="text-2xl md:text-3xl font-bold text-primary mt-1 min-h-[2.25rem] md:min-h-[2.75rem]">
          {displayText}
          <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  );
};

export default TerminalCard;