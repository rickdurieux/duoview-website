'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#onze-drones', label: 'Onze drones' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setIsMenuOpen(false);
    }
  }, [isVisible]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] px-4 py-4 transition-all duration-500 sm:px-6 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-white/75 px-4 py-3 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          className="flex shrink-0 items-center rounded-full border border-sky-100 bg-sky-50/80 px-3 py-2 transition hover:border-sky-200 hover:bg-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/duoview-logo.png"
            alt="DuoView"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-sky-50/80 text-slate-700 transition hover:border-sky-200 hover:bg-white md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? 'top-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? 'top-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>

        <nav className="hidden flex-1 md:block">
          <ul className="flex min-w-max justify-end gap-2 sm:gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-100 hover:bg-sky-50 hover:text-sky-700 sm:px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-sky-100 bg-white/80 shadow-[0_18px_45px_rgba(148,163,184,0.16)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? 'max-h-96 translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <nav className="p-3">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
