import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { navLinks } from "../constants.tsx/constants";

const Navbar = () => {
  return (
    <div className="text-base">
      <nav
        className="fixed left-1/2 transform -translate-x-1/2 z-[10000] flex items-center justify-between border border-pink-300 hover:shadow-md
       transition-all duration-600 
      bg-gradient-to-r from-transparent via-pink-100 to-transparent  rounded-full mt-2 py-1 px-3 w-[95%] xl:mt-5 xl:py-3 xl:px-8 xl:w-[90%] mx-auto"
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
                  className="hover:shadow-lg hover:bg-gradient-to-r hover:from-transparent hover:via-white hover:to-pink-100 transition-colors duration-300 py-2 px-10 rounded-full"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="font-bold">
          <button className="cursor-pointer bg-pink-500  text-white rounded-full xl:py-3 xl:px-12 bg-gradient-to-r from-pink-400 to-pink-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 active:bg-gradient-to-r active:from-pink-800 active:to-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300">
            Contactar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
