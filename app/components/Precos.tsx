import { precos } from "../constants.tsx/constants";

export default function Precos() {
  return (
    <section
      id="precario"
      className="relative bg-[#f7e5d9] "
      aria-labelledby="precos-heading"
    >
      <div className="py-6  bg-gradient-to-b from-[#dca38e] to-[#f7e5d9]"></div>
      <div className="mx-auto max-w-4xl px-4">
        <header className="mb-8 mt-8 text-center">
          <h2
            id="precos-heading"
            className="text-3xl font-semibold tracking-tight text-[#8d4024] sm:text-4xl"
          >
            PREÇÁRIO
          </h2>
          <p className="mt-2 py-2 px-8 rounded-sm w-fit mx-auto text-sm text-white bg-[#8d4024]/80 ">
            Depilação à Cera
          </p>
        </header>

        <div
          className={`overflow-x-auto rounded-2xl border border-rose-200 shadow-xl`}
        >
          <table className="min-w-full text-left">
            <caption className="sr-only">Lista de serviços e preços</caption>
            <thead className="bg-gradient-to-b from-[#dca38e] to-rose-100 text-blac">
              <tr>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  Serviço
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-sm font-semibold w-32"
                >
                  Preço
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-100">
              {precos.map((s) => (
                <tr
                  key={s.name}
                  className={`hover:bg-gradient-to-b hover:from-[#dca38e] hover:to-rose-100 ${
                    s.id % 2 === 0
                      ? "bg-gradient-to-r from-transparent to-white/85"
                      : "bg-gradient-to-r from-white/85 to-transparent"
                  }  `}
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-rose-900 font-medium"
                  >
                    {s.name}
                  </th>
                  <td className="px-5 py-4 tabular-nums text-rose-800">
                    {s.price.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-rose-700">* Valores em meticais.</p>
          <a
            target="_blank"
            href="https://wa.me/c/258870715416"
            className=" bg-gradient-to-r from-pink-400 to-pink-600 text-white  py-2 px-6 mb-6 rounded-full shadow-lg xl:shadow-none hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 active:bg-gradient-to-r active:from-pink-800 active:to-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Agendar Sessão
          </a>
        </div>
      </div>
    </section>
  );
}
