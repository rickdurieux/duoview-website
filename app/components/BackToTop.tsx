'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Terug naar boven"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/85 text-slate-700 shadow-[0_16px_40px_rgba(148,163,184,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-sky-200 hover:bg-white active:translate-y-0 active:scale-[0.98] active:bg-sky-50 md:bottom-8 md:right-8 md:h-16 md:w-16 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span className="flex flex-col items-center justify-center gap-0.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-700/90 md:text-[11px]">
          Take off
        </span>

        <span className="relative flex h-9 w-9 items-center justify-center md:h-10 md:w-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8 md:h-9 md:w-9"
          aria-hidden="true"
        >
          <path
            d="M9.25 10.5h5.5c.55 0 1 .45 1 1v2.25c0 .55-.45 1-1 1h-5.5c-.55 0-1-.45-1-1V11.5c0-.55.45-1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.25 8.5 7.75 6.5M13.75 8.5l2.5-2M8.5 12h-3M18.5 12h-3M10.25 16l-2.5 2M13.75 16l2.5 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="6.5"
            cy="5.75"
            r="1.65"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="17.5"
            cy="5.75"
            r="1.65"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="6.5"
            cy="18.25"
            r="1.65"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="17.5"
            cy="18.25"
            r="1.65"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 9V5.75"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M10.4 7.1 12 5.5l1.6 1.6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </span>
      </span>
    </button>
  );
}
