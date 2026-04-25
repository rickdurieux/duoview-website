export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
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

        <div className="absolute inset-0 z-10 bg-black/35" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.82)_100%)]" />

        <div className="relative z-20 flex min-h-screen items-center">
          <div className="mx-auto flex w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.45em] text-sky-300/85">
                DuoView
              </p>

              <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Elevate Your Vision
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Professionele dronebeelden, inspecties en visuele content
                vanuit een nieuw perspectief.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#diensten"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Bekijk diensten
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15"
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
        className="relative border-t border-white/10 bg-[linear-gradient(180deg,#020617_0%,#020817_40%,#040b16_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-300/70">
              Diensten
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Diensten
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Van indrukwekkende dronebeelden tot praktische inspecties:
              DuoView helpt bedrijven en organisaties om hun locatie,
              project of verhaal vanuit een nieuw perspectief te laten zien.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.08]">
              <div className="h-full rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(14,23,44,0.55),rgba(2,6,23,0.15))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/70">
                    01
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Dronebeelden
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Cinematische luchtbeelden voor bedrijven, vastgoed,
                    evenementen en promotie.
                  </p>
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.08]">
              <div className="h-full rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(14,23,44,0.55),rgba(2,6,23,0.15))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/70">
                    02
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Inspecties
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Veilige visuele inspecties van daken, gebouwen, terreinen
                    en moeilijk bereikbare plekken.
                  </p>
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.08]">
              <div className="h-full rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(14,23,44,0.55),rgba(2,6,23,0.15))] p-1">
                <div className="h-full rounded-[calc(1rem-1px)] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/70">
                    03
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Content &amp; montage
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Professionele video&apos;s en social content die klaar zijn
                    voor website, socials en campagnes.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
