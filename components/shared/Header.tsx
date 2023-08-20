"use client";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Button } from "../ui/button";
import { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="container flex justify-between pt-[41px] text-white sticky top-0">
      <a href="#">
        <img
          src="/img/logo.png"
          className="w-[115px] lg:w-[133px]"
          alt="Logo"
        />
      </a>
      <div
        className={`fixed top-0 h-screen w-full left-0 transition duration-300 lg:[position:initial] lg:h-[auto] lg:contents ${
          isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        }`}
      >
        <ul className="bg-charcoal-black min-h-screen flex flex-col gap-[35px] justify-center  lg:flex lg:gap-[65px] lg:min-h-[initial] items-center lg:flex-row lg:bg-none">
          <li>
            <a
              href="#"
              className="hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              ¿A qué motero ayudaremos?
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              pasos a seguir
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            {/* CONTÁCTANOS */}
            <Button onClick={() => setIsMenuOpen((prevState) => !prevState)}>
              Contáctanos
            </Button>
          </li>
        </ul>
        <div className="fixed bottom-[36px] left-1/2 -translate-x-1/2 flex gap-[10px]">
          <a
            href="https://www.facebook.com/Darranque"
            className="w-[32px]  h-[32px] rounded-full border-white border-[2px]  grid place-content-center hover:bg-white hover:text-primary transition duration-300"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/darranque"
            className="w-[32px]  h-[32px] rounded-full border-white border-[2px]  grid place-content-center hover:bg-white hover:text-primary transition duration-300"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@DarranqueRevoluciona"
            target="_blank"
            className="w-[32px]  h-[32px] rounded-full border-white border-[2px]  grid place-content-center hover:bg-white hover:text-primary transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@darranque"
            className="w-[32px]  h-[32px] rounded-full border-white border-[2px]  grid place-content-center hover:bg-white hover:text-primary transition duration-300"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <button
        className="text-white text-2xl z-10 lg:hidden"
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        {isMenuOpen ? <CgClose /> : <FaBars />}
      </button>
    </header>
  );
};
