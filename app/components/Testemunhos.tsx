// app/components/TestimonialsSection.tsx

import { testimonials } from "../constants.tsx/constants";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < n ? "fill-pink-500" : "fill-rose-200"}`}
          aria-hidden="true"
        >
          <path d="M12 17.3 5.8 21l1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testemunhos() {
  return (
    <section id="testemunhos" className="relative">
      <div className="absolute inset-0 -z-10 bg-[#f7e5d9]" />
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <header className="mb-10 text-center">
          <h2 className="pt-12 text-3xl font-semibold tracking-tight text-[#8d4024] sm:text-4xl">
            Testemunhos
          </h2>
          <p className="mt-2 py-2 px-8 rounded-sm w-fit mx-auto text-sm text-white bg-[#8d4024]/80 ">
            O que dizem as nossas clientes?
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-rose-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* soft gradient sheen */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-pink-300/20 to-rose-200/10 blur-2xl" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        width={40}
                        height={40}
                        alt={`Foto de ${t.name}`}
                        className="rounded-full object-cover border border-rose-200 shadow-lg"
                      />
                    ) : (
                      <span className="text-sm font-semibold">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-rose-900">
                      {t.name}
                    </h3>
                    {t.role && (
                      <p className="text-xs text-rose-600/80">{t.role}</p>
                    )}
                  </div>
                </div>
                <Stars n={t.rating} />
              </div>

              <blockquote className="text-rose-900">
                <p className="text-sm leading-relaxed">“{t.text}”</p>
              </blockquote>

              <footer className="mt-5"></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
