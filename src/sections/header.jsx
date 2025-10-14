import { useState } from "react";
import Logo from "../assets/Logo_amarela.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-dark border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src={Logo} alt="Logo Ótica" className="h-16" />

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 font-bold text-white">
          <a href="#" className="hover:border-b-2 transition border-amber-300">Home</a>
          <a href="#" className="hover:border-b-2 transition border-amber-300">Produtos</a>
          <a href="#" className="hover:border-b-2 transition border-amber-300">Lentes</a>
          <a href="#" className="hover:border-b-2 transition border-amber-300">Promoções</a>
          <a href="#" className="hover:border-b-2 transition border-amber-300">Quem Somos</a>
          <a href="#" className="hover:border-b-2 transition border-amber-300">Contato</a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-black text-white flex flex-col space-y-2 px-4 py-3 font-bold">
          <a href="#" className="hover:text-amber-300 transition">Home</a>
          <a href="#" className="hover:text-amber-300 transition">Produtos</a>
          <a href="#" className="hover:text-amber-300 transition">Lentes</a>
          <a href="#" className="hover:text-amber-300 transition">Promoções</a>
          <a href="#" className="hover:text-amber-300 transition">Quem Somos</a>
          <a href="#" className="hover:text-amber-300 transition">Contato</a>
        </nav>
      )}
    </header>
  );
}
