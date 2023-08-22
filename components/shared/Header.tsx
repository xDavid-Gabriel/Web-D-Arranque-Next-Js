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
import { useEffect, useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState<string | null>(null);
  useEffect(() => {
    //Navegación activo
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        // Cordenadas de cada sección
        const rect = section.getBoundingClientRect();
        // console.log(rect)
        if (rect.top <= 150 && rect.bottom >= 150) {
          setNavigation(section.id);
          return;
        }
      });
    };

    //Para la navegacion activa
    document.addEventListener("scroll", handleScroll);

    return () => {
      //Para la navegacion activa
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="bg-charcoal-black/80 [backdrop-filter:30px] sticky top-0 z-10 pb-5">
      <div className="container flex justify-between pt-[41px] text-white  ">
        <a href="#">
          <img
            src="/img/logo.png"
            className="w-[115px] lg:w-[133px] object-contain"
            alt="Logo"
          />
        </a>
        <div
          className={`fixed z-10 top-0 h-screen w-full left-0 transition duration-300 lg:[position:initial] lg:h-[auto] lg:contents ${
            isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
          }`}
        >
          <ul className="bg-charcoal-black min-h-screen flex flex-col gap-[35px] justify-center  lg:flex lg:gap-[65px] lg:min-h-[initial] items-center lg:flex-row lg:bg-transparent">
            <li>
              <a
                href="#paso-a-seguir"
                className={`hover:text-primary transition duration-300 ${
                  navigation === "paso-a-seguir" && "text-primary"
                }`}
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              >
                Còmo participar
              </a>
            </li>
            <li>
              <a
                href="#a-que-motero-ayudaremos"
                className={`hover:text-primary transition duration-300 ${
                  navigation === "a-que-motero-ayudaremos" && "text-primary"
                }`}
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              >
                ¿A qué motero ayudaremos?
              </a>
            </li>

            <li>
              <a
                href="#quienes-somos"
                className={`hover:text-primary transition duration-300 ${
                  navigation === "quienes-somos" && "text-primary"
                }`}
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              >
                Conoce màs de D'arranque
              </a>
            </li>
            <li>
              {/* CONTÁCTANOS */}
              <a href="#contactanos">
                <Button
                  onClick={() => setIsMenuOpen((prevState) => !prevState)}
                >
                  Contáctanos
                </Button>
              </a>
            </li>
          </ul>
          <div className="fixed bottom-[36px] left-1/2 -translate-x-1/2 flex gap-[10px] lg:left-[50px] lg:top-[400px]  lg:flex-col lg:translate-x-[0]">
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
      </div>
    </header>
  );
};
