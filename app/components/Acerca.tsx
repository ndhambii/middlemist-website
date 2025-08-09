import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      <section
        id="acerca"
        className="flex flex-col  justify-center h-screen px-4 "
      >
        <div className="border border-pink-300 shadow-lg rounded-xl bg-[#dca38e]/80">
          <Image
            src="/wax.png"
            alt="Wax illustration"
            width={400}
            height={200}
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 mx-2 mt-5">
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-[#f7e4d9] bg-clip-text text-transparent">
            Welcome
          </span>
          {"   "}
          to... <br />
          <span className="px-6 mt-10 text-white bg-gradient-to-r from-[#ecac99] to-[#dca38e] rounded-sm ">
            MiddleMist
          </span>
        </h1>
        <p className="mx-2 font-bold text-lg text-[#f7e4d9] mb-4">
          Depilação Feminina à Cera em Maputo
        </p>
        <div className="cursor-pointer w-fit mx-auto bg-gradient-to-r from-pink-400 to-pink-600 text-white  py-2 px-6 rounded-full flex items-center shadow-lg xl:shadow-none hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 active:bg-gradient-to-r active:from-pink-800 active:to-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300">
          <button className="mr-2 font-bold">
            <a target="_blank" href="https://wa.me/c/258870715416">
              Agendar Sessão{" "}
            </a>
          </button>
          <FaArrowRight size={20} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
