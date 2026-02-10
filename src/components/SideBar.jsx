import { motion } from "framer-motion";
import Logo from "../assets/Logo_dourada.webp";


export default function SideBar({ onClose }) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar (entra e sai pela ESQUERDA) */}
      <motion.aside
        key="sidebar"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-brand-dark text-white z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-center p-3 mb-2 border-b border-brand-primary">
          <a href="/#" onClick={onClose}>
            <img src={Logo} alt="Ótica Logo" className="h-16" />
          </a>
        </div>

        <nav className="flex flex-col gap-1 font-sans text-base font-normal">
          <a href="#home" onClick={onClose} className="p-3 border-b border-white/10">Home</a>
          <a href="#ofertas" onClick={onClose} className="p-3 border-b border-white/10">Ofertas</a>
          <a href="#galeria" onClick={onClose} className="p-3 border-b border-white/10">Galeria</a>
          <a
            href="https://wa.me/5585992819050?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20óculos."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-left flex items-center w-full p-3 rounded-lg hover:bg-white/10"
          >
            Fale conosco
          </a>
        </nav>
      </motion.aside>
    </>
  );
}
