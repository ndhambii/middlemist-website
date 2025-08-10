"use client";
import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
import { navLinks } from "../constants.tsx/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openSideHandler = () => setIsOpen(true);
  const closeSideHandler = () => setIsOpen(false);

  const sideOpen = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div className={`text-base`}>
      <nav
        className={`fixed left-1/2 transform -translate-x-1/2 z-[1000] backdrop-blur-sm flex items-center justify-between border border-pink-300 hover:shadow-md
       transition-all duration-600 
      bg-gradient-to-r from-transparent via-[#f7e5d9] to-transparent  rounded-full mt-2 py-1 px-3 w-[95%] xl:mt-5 xl:py-3 xl:px-8 xl:w-[90%] mx-auto `}
      >
        <div>
          <Link href="/">
            <h1 className="xl:text-3xl">MiddleMist</h1>
          </Link>
        </div>
        <div>
          <ul className="hidden xl:flex ">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="hover:shadow-lg hover:bg-gradient-to-r hover:from-transparent hover:via-white/60 hover:to-pink-100 transition-colors duration-300 py-2 px-10 rounded-full"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="font-bold">
          <button className="hidden xl:block cursor-pointer bg-pink-500  text-white font-bold rounded-full xl:py-3 xl:px-12 bg-gradient-to-r from-pink-400 to-pink-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 active:bg-gradient-to-r active:from-pink-800 active:to-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300">
            <a target="_blank" href="https://wa.me/c/258870715416">
              Contactar
            </a>
          </button>
        </div>

        <button className="xl:hidden">
          <RiMenu3Fill
            onClick={openSideHandler}
            className="text-2xl text-black "
          />
        </button>
      </nav>
      {/* Mobile Navigation */}
      <div
        className={`xl:hidden fixed ${sideOpen} transform transition-all duration-500 delay-300 right-0 w-[80%] border border-pink-300 h-screen z-[1000002] bg-gradient-to-l from-[#f7e5d9] to-[#f7e5d9]/65 rounded-l-xl flex flex-col items-center shadow-2xl backdrop-blur-sm justify-between`}
      >
        <button>
          <GiTireIronCross
            onClick={closeSideHandler}
            className="text-2xl text-black absolute top-3 right-5 sm:right-7 md:right-8"
          />
        </button>
        <ul className={`flex flex-col items-center $`}>
          {navLinks.map((item) => {
            return (
              <li
                onClick={closeSideHandler}
                key={item.id}
                className="py-5 px-6"
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={closeSideHandler}
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-1 px-5 rounded-full"
        >
          <a target="_blank" href="https://wa.me/c/258870715416">
            Contactar{" "}
          </a>
        </button>

        <p className="pb-3">MiddleMist</p>
      </div>
    </div>
  );
};

export default Navbar;
