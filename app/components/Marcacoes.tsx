import {
  FiClock,
  FiMapPin,
  FiHome,
  FiScissors,
  FiArrowRight,
} from "react-icons/fi";

export default function Marcacoes() {
  return (
    <section id="marcacoes" className="bg-[#f7e5d9] px-4 py-1 md:py-2">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="mt-3 text-[#8d4024] text-3xl md:text-4xl font-bold">
            Agende a sua Sessão
          </h2>
          <p className="mt-2 py-2 px-8 rounded-sm w-fit mx-auto text-sm text-white bg-[#8d4024]/80 ">
            Marcações & Informações
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow-lg border border-white/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#ecac99] to-[#dca38e] text-white shadow">
                <FiMapPin size={20} />
              </div>
              <h3 className="font-semibold">Localização</h3>
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Alto Maé, Rua do Big Brother
            </p>
          </div>

          <div className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow-lg border border-white/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#ecac99] to-[#dca38e] text-white shadow">
                <FiScissors size={20} />
              </div>
              <h3 className="font-semibold">Serviços</h3>
            </div>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-[#ecac99]/25">
                  <FiScissors />
                </span>
                Nas nossas instalações
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-[#ecac99]/25">
                  <FiHome />
                </span>
                Ao domicílio
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow-lg border border-white/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#ecac99] to-[#dca38e] text-white shadow">
                <FiClock size={20} />
              </div>
              <h3 className="font-semibold">Horários</h3>
            </div>
            <div className="mt-3 text-gray-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Seg–Sex</span>
                <span className="rounded-full px-2 py-0.5 text-sm bg-[#ecac99]/25">
                  08h–17h
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Sábado</span>
                <span className="rounded-full px-2 py-0.5 text-sm bg-[#ecac99]/25">
                  08h–14h
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Domingo</span>
                <span className="rounded-full px-2 py-0.5 text-sm bg-gray-200">
                  Fechado
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/c/258870715416"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6 font-semibold text-white shadow-xl
                       bg-gradient-to-r from-[#ecac99] to-[#dca38e] hover:brightness-105 active:scale-[.99] transition"
          >
            Agendar Sessão <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
