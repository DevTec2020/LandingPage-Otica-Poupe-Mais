import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import SideBar from "../components/SideBar";


import Logo from "../assets/Logo_amarela.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const icone = isOpen ? faXmark : faBars;

  return (
    <header className="bg-brand-dark border-b-4 border-brand-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="Logo Ótica" className="h-16" />
        </a>
        {/* Menu desktop */}
        <nav className="hidden md:flex md:items-center space-x-8 font-bold text-white">
          <a href="#" className=" transition hover:text-amber-300">Home</a>
          <a href="#" className=" transition hover:text-amber-300">Produtos</a>
          <a href="#" className=" transition hover:text-amber-300">Galeria</a>
          <a
            href="https://wa.me/558597228120?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20óculos."
            target="_blank"
            className="bg-brand-primary py-2 px-4 rounded-2xl text-black hover:bg-brand-secondary transition "
          >
            Fale conosco
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen((s) => !s)}
          id="mobile-menu-button"
          aria-expanded={isOpen}
          area-controls="mobile-sidebar"
        >
          <FontAwesomeIcon icon={icone} className="text-white w-6 h-6 text-3xl" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <SideBar 
            key="mobile-sidebar"
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
