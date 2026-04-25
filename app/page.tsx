export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.82)_100%)]" />

      <section className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="relative z-20 max-w-3xl">
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
      </section>
    </main>
  );
}
