import Link from 'next/link';

export default function BedrijvenPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eff6ff_0%,#f8fafc_18%,#f0f9ff_45%,#ffffff_100%)] text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Bedrijven
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Breng je bedrijf, locatie of proces professioneel in beeld.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              DuoView maakt visuele content die laat zien wie je bent, waar je
              werkt en wat je doet. Geschikt voor websites, socials,
              presentaties en employer branding.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-[0_12px_30px_rgba(148,163,184,0.12)] transition hover:bg-sky-50"
              >
                Terug naar home
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.24)] transition hover:bg-cyan-500"
              >
                Contact opnemen
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.14)] backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-600">
              DuoView
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Professionele merk- en bedrijfscontent
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Locaties, teams en processen krijgen meer impact wanneer ze helder
              en overtuigend in beeld worden gebracht.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
