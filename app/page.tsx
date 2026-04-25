import ScrollHeader from './components/ScrollHeader';

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#eff6ff_0%,#f8fafc_18%,#f0f9ff_45%,#ffffff_100%)] text-slate-900">
      <ScrollHeader />

      <section id="home" className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/duoview-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(240,249,255,0.12)_28%,rgba(14,116,144,0.18)_68%,rgba(15,23,42,0.26)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_32%),radial-gradient(circle_at_right,rgba(186,230,253,0.28),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(12,74,110,0.12)_52%,rgba(15,23,42,0.22)_100%)]" />

        <div className="relative z-20 flex min-h-screen items-center">
          <div className="mx-auto flex w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.45em] text-sky-100">
                DuoView
              </p>

              <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Elevate Your Vision
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
                Professionele dronebeelden, inspecties en visuele content
                vanuit een nieuw perspectief.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#diensten"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.28)] transition hover:bg-cyan-500"
                >
                  Bekijk diensten
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-sky-100/70 bg-white/18 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/28"
                >
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="diensten"
        className="relative border-t border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f0f9ff_48%,#eff6ff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Diensten
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Diensten
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              Van indrukwekkende dronebeelden tot praktische inspecties:
              DuoView helpt bedrijven en organisaties om hun locatie,
              project of verhaal vanuit een nieuw perspectief te laten zien.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="group rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)]">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-600">
                    01
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Dronebeelden
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Cinematische luchtbeelden voor bedrijven, vastgoed,
                    evenementen en promotie.
                  </p>
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)]">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-600">
                    02
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Inspecties
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Veilige visuele inspecties van daken, gebouwen, terreinen
                    en moeilijk bereikbare plekken.
                  </p>
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)]">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-600">
                    03
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Content &amp; montage
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Professionele video&apos;s en social content die klaar zijn
                    voor website, socials en campagnes.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_36%,#eff6ff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Werk dat hoogte, detail en verhaal samenbrengt
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              DuoView maakt visuele producties die sfeer, schaal en precisie
              combineren. Van vastgoed en bedrijventerreinen tot events en
              merkcontent: elk project krijgt een strakke, hoogwaardige
              uitstraling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(148,163,184,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Vastgoed
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Dynamische beelden die locaties helder, ruimtelijk en premium
                presenteren.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(148,163,184,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Bedrijven
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Dronecontent die processen, locaties en merkidentiteit krachtig
                in beeld brengt.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(148,163,184,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Campagnes
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Social-first video’s en hero visuals die direct inzetbaar zijn
                in online campagnes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="over-ons"
        className="border-t border-slate-200 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
                Over ons
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Technisch scherp, visueel sterk
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
                DuoView combineert een cinematografische blik met praktische
                inzetbaarheid. Daardoor ontstaan beelden die niet alleen mooi
                zijn, maar ook echt waarde toevoegen voor presentatie,
                inspectie en communicatie.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.16)] backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Focus
              </p>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li>Professionele drone-opnames met premium uitstraling.</li>
                <li>Veilige en efficiënte visuele inspecties op locatie.</li>
                <li>Content die direct bruikbaar is voor web en socials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_20px_55px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:p-10 lg:p-14">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Klaar om jouw project vanuit een nieuw perspectief te tonen?
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              Neem contact op voor dronebeelden, inspecties of contentproductie.
              DuoView denkt graag mee over een aanpak die past bij jouw locatie,
              doel en verhaal.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@duoview.nl"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.25)] transition hover:bg-cyan-500"
              >
                info@duoview.nl
              </a>
              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
              >
                Terug naar boven
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
