import Image from 'next/image';
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

        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.42)_0%,rgba(15,23,42,0.24)_32%,rgba(12,74,110,0.1)_56%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(239,246,255,0.72)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.16),transparent_24%),radial-gradient(circle_at_right,rgba(125,211,252,0.1),transparent_22%)]" />

        <div className="relative z-20 flex min-h-screen items-center">
          <div className="mx-auto flex w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-slate-900/18 px-3 py-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.14)] backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/16 p-2 sm:h-12 sm:w-12">
                  <Image
                    src="/duoview-logo.png"
                    alt="DuoView logo"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-sky-100/75 sm:text-xs">
                    Drone imaging & visual content
                  </p>
                  <p className="mt-0.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    DuoView
                  </p>
                </div>
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] text-white [text-shadow:0_12px_32px_rgba(15,23,42,0.58)] sm:text-6xl lg:text-7xl">
                Elevate Your Vision
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-50/95 [text-shadow:0_6px_20px_rgba(15,23,42,0.48)] sm:text-xl">
                Professionele dronebeelden, FPV en visuele content vanuit een
                nieuw perspectief.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#diensten"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(14,165,233,0.35)] transition hover:bg-cyan-500"
                >
                  Bekijk diensten
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-slate-900/12 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] backdrop-blur-sm transition hover:bg-white/16"
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

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-3">
            <article className="group min-w-[85%] snap-center rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)] md:min-w-0">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
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

            <article className="group min-w-[85%] snap-center rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)] md:min-w-0">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    FPV
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    FPV-dronebeelden met dynamische en meeslepende bewegingen,
                    ideaal voor promotievideo&apos;s, bedrijfsfilms en unieke
                    indoor of snelle shots.
                  </p>
                </div>
              </div>
            </article>

            <article className="group min-w-[85%] snap-center rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(14,165,233,0.16)] md:min-w-0">
              <div className="h-full rounded-2xl border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.92))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
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

      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_38%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Drone Fleet
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Onze drones
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              Wij werken met zorgvuldig geselecteerde drones voor cinematic
              beelden, compacte producties en dynamische FPV-opnames.
            </p>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
            <article className="group min-w-[85%] snap-center rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.16)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_30px_70px_rgba(125,211,252,0.22)] sm:p-8 md:min-w-0">
              <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-100 group-hover:text-sky-800">
                Cinematic
              </div>
              <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-3xl bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_30px_rgba(148,163,184,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_18px_38px_rgba(125,211,252,0.16)]">
                <Image
                  src="/drone-air-3s.png"
                  alt="DJI Air 3S"
                  width={420}
                  height={280}
                  className="h-auto w-full max-w-[300px] object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                DJI Air 3S
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Krachtige allround drone voor hoogwaardige luchtbeelden,
                detailshots en professionele producties.
              </p>
            </article>

            <article className="group min-w-[85%] snap-center rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.16)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_30px_70px_rgba(125,211,252,0.22)] sm:p-8 md:min-w-0">
              <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-100 group-hover:text-sky-800">
                Compact
              </div>
              <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-3xl bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_30px_rgba(148,163,184,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_18px_38px_rgba(125,211,252,0.16)]">
                <Image
                  src="/drone-mini-4-pro.png"
                  alt="DJI Mini 4 Pro"
                  width={420}
                  height={280}
                  className="h-auto w-full max-w-[300px] object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                DJI Mini 4 Pro
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Licht, flexibel en ideaal voor snelle shoots, locaties met
                beperkte ruimte en haarscherpe content.
              </p>
            </article>

            <article className="group min-w-[85%] snap-center rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.16)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_30px_70px_rgba(125,211,252,0.22)] sm:p-8 md:min-w-0">
              <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-100 group-hover:text-sky-800">
                Dynamisch
              </div>
              <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-3xl bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_30px_rgba(148,163,184,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_18px_38px_rgba(125,211,252,0.16)]">
                <Image
                  src="/drone-fpv.png"
                  alt="FPV Drone"
                  width={420}
                  height={280}
                  className="h-auto w-full max-w-[300px] object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                FPV Drone
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Voor snelle, meeslepende en unieke first person view-opnames
                met veel beleving en beweging.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_36%,#eff6ff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-600">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Werk dat hoogte, detail en verhaal samenbrengt
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              DuoView maakt visuele producties die sfeer, schaal en precisie
              combineren. Van vastgoed en bedrijventerreinen tot events en
              merkcontent: elk project krijgt een strakke, hoogwaardige
              uitstraling.
            </p>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
            <article className="group flex min-w-[82%] snap-center flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.14)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_60px_rgba(125,211,252,0.18)] sm:p-8 md:min-w-0">
              <div className="rounded-[1.5rem] border border-sky-100/80 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(240,249,255,1),rgba(239,246,255,1))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-200">
                <div className="h-36 rounded-[1.25rem] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.28),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.88))]" />
              </div>
              <p className="mt-7 text-sm uppercase tracking-[0.3em] text-sky-600">
                Vastgoed
              </p>
              <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">
                Dynamische beelden die locaties helder, ruimtelijk en premium
                presenteren.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-semibold text-sky-700 transition group-hover:text-sky-800"
              >
                Bekijk stijl
              </a>
            </article>

            <article className="group flex min-w-[82%] snap-center flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.14)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_60px_rgba(125,211,252,0.18)] sm:p-8 md:min-w-0">
              <div className="rounded-[1.5rem] border border-sky-100/80 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(240,249,255,1),rgba(239,246,255,1))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-200">
                <div className="h-36 rounded-[1.25rem] bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.88))]" />
              </div>
              <p className="mt-7 text-sm uppercase tracking-[0.3em] text-sky-600">
                Bedrijven
              </p>
              <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">
                Dronecontent die processen, locaties en merkidentiteit krachtig
                in beeld brengt.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-semibold text-sky-700 transition group-hover:text-sky-800"
              >
                Bekijk stijl
              </a>
            </article>

            <article className="group flex min-w-[82%] snap-center flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(148,163,184,0.14)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_60px_rgba(125,211,252,0.18)] sm:p-8 md:min-w-0">
              <div className="rounded-[1.5rem] border border-sky-100/80 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(240,249,255,1),rgba(239,246,255,1))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-200">
                <div className="h-36 rounded-[1.25rem] bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.88))]" />
              </div>
              <p className="mt-7 text-sm uppercase tracking-[0.3em] text-sky-600">
                Campagnes
              </p>
              <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">
                Social-first video’s en hero visuals die direct inzetbaar zijn
                in online campagnes.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-semibold text-sky-700 transition group-hover:text-sky-800"
              >
                Bekijk stijl
              </a>
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
                DuoView combineert een cinematografische blik met technische
                precisie. Daardoor ontstaan beelden die niet alleen mooi zijn,
                maar ook echt waarde toevoegen voor presentatie, promotie en
                communicatie.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_18px_45px_rgba(148,163,184,0.16)] backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Focus
              </p>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li>Professionele drone-opnames met premium uitstraling.</li>
                <li>
                  Dynamische FPV-beelden voor unieke perspectieven en beweging.
                </li>
                <li>
                  Content die direct bruikbaar is voor web, socials en
                  campagnes.
                </li>
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
