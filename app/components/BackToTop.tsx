'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
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
      className={`fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-100 bg-white/75 text-slate-700 shadow-[0_16px_40px_rgba(148,163,184,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:text-sky-700 sm:bottom-6 sm:right-6 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M12 8.25v7.5M8.75 11.5 12 8.25l3.25 3.25"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 16.5h11.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="7"
            cy="6.75"
            r="1.35"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="17"
            cy="6.75"
            r="1.35"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M8.4 7.35h7.2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M9.75 5.25 8.3 7.1M14.25 5.25l1.45 1.85"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}
