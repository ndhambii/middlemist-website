import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      <section className="flex flex-col  justify-center h-screen px-4 ">
        <div className="border border-pink-300 shadow-lg rounded-xl backdrop-blur-sm">
          <Image
            src="/wax.png"
            alt="Wax illustration"
            width={400}
            height={200}
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 mx-2 mt-5">
          <span className="bg-gradient-to-r from-pink-600 via-red-500 to-[#f7e4d9] bg-clip-text text-transparent">
            Welcome
          </span>{" "}
          to MiddleMist
        </h1>
        <p className="mx-2 text-lg text-[#f7e4d9] mb-4">
          Depilação Feminina à Cera em Maputo
        </p>
        <div className="w-fit mx-auto bg-gradient-to-r from-pink-400 to-pink-600 text-white  py-2 px-6 rounded-full flex items-center shadow-lg">
          <button className="mr-2 font-bold">Agendar Sessão</button>
          <FaArrowRight size={20} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
