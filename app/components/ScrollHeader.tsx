'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] px-4 py-4 transition-all duration-500 sm:px-6 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/12 bg-slate-950/70 px-4 py-3 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          className="flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-sky-300/30 hover:bg-white/10"
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

        <nav className="flex-1 overflow-x-auto">
          <ul className="flex min-w-max justify-end gap-2 sm:gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/15 hover:bg-white/8 hover:text-white sm:px-4"
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
