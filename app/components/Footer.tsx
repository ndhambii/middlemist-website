import Link from "next/link";
import { navLinks } from "../constants.tsx/constants";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="shadow-inner bg-[#dca38e]/80">
      <div className="py-6 bg-gradient-to-b from-[#f7e5d9] to-[#dca38e]"></div>
      <div className="max-w-6xl mx-auto px-4  flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Brand */}
        <h2 className="text-lg pt-4 font-bold text-white">MiddleMist</h2>

        {/* Navigation Links className="hover:text-pink-500 transition-colors"*/}

        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                className="list-none items-center hover:text-pink-500 transition-colors"
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            target="_blank"
            href="https://www.instagram.com/middlemiststudio0"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm4.25-.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://wa.me/c/258870715416"
            aria-label="Whatsapp"
            className="hover:text-pink-500 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.1 1.6 5.9L0 24l6.37-1.66a11.8 11.8 0 0 0 5.7 1.47h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.35zM12.07 21.3a9.43 9.43 0 0 1-4.81-1.32l-.35-.2-3.77 1 1.01-3.68-.23-.38a9.43 9.43 0 1 1 8.15 4.58zM17.08 14.3c-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.03-.15.17-.3.2-.56.08-.26-.13-1.09-.4-2.07-1.24-.76-.65-1.27-1.45-1.42-1.69-.15-.26-.02-.4.11-.54.12-.12.26-.32.39-.48.13-.17.17-.29.26-.48.09-.2.04-.36-.02-.5-.06-.13-.52-1.25-.71-1.71-.19-.46-.39-.4-.54-.41l-.46-.01c-.17 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.35c.12.15 1.61 2.46 3.89 3.45.54.24.97.38 1.3.49.55.17 1.05.16 1.44.1.44-.07 1.38-.57 1.57-1.12.19-.55.19-1.02.14-1.12-.05-.1-.21-.16-.45-.28z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-xs text-gray-500 mt-4 pb-10">
        © {new Date().getFullYear()} MiddleMist. Todos os direitos reservados.
      </div>
    </footer>
  );
}
