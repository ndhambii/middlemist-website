import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      <section id="acerca" className="min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="border border-pink-300 shadow-lg rounded-xl bg-[#dca38e]/80 p-3 md:p-5">
                <Image
                  src="/wax.png"
                  alt="Wax illustration"
                  width={800}
                  height={500}
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 85vw"
                  className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>
            </div>

            {/* Text + CTA */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-red-500 via-pink-500 via-[#f7e4d9] to-black/70 bg-clip-text text-transparent">
                  Welcome
                </span>{" "}
                to... <br />
                <span className="inline-block px-6 mt-4 md:mt-6 text-white bg-gradient-to-r from-[#ecac99] to-[#dca38e]/50 rounded-sm">
                  MiddleMist
                </span>
              </h1>

              <p className="font-bold text-lg md:text-xl xl:mt-10 text-[#f7e4d9] mb-6">
                Depilação Feminina à Cera em Maputo
              </p>

              <a
                href="https://wa.me/c/258870715416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mx-auto lg:mx-0 w-fit bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2.5 px-6 rounded-full shadow-lg lg:shadow-none lg:text-lg lg:py-4 lg:px-10 lg:mt-20 hover:shadow-lg hover:from-pink-600 hover:to-pink-400 active:from-pink-800 active:to-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                <span className="font-bold">Agendar Sessão</span>
                <FaArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
