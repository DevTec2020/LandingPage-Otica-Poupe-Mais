import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import teste2 from "../assets/armacoes/teste2.webp"
import teste21 from "../assets/armacoes/teste2-1.webp"

import teste3 from "../assets/armacoes/teste3.webp"
import teste31 from "../assets/armacoes/teste3-1.webp"

import teste4 from "../assets/armacoes/teste4.webp"
import teste41 from "../assets/armacoes/teste4-1.webp"

import teste5 from "../assets/armacoes/teste5.webp"
import teste51 from "../assets/armacoes/teste5-1.webp"

import { useState } from "react";

export default function Produtos() {

  const armacoes = [
    { armacaoFrente: teste21, armacaoLateral: teste2, alt:'Modelo de Armação' },
    { armacaoFrente: teste31, armacaoLateral: teste3, alt:'Modelo de Armação' },
    { armacaoFrente: teste41, armacaoLateral: teste4, alt:'Modelo de Armação' },
    { armacaoFrente: teste51, armacaoLateral: teste5, alt:'Modelo de Armação' },
  ];

  return (
    <section className="py-16 px-4 text-center bg-gray-100">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-gray-500 uppercase">
        Armações em Destaque
      </h3>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {armacoes.map((arm, index) => (
          <ProdutoCard key={index} arm={arm} />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-500  uppercase">
            Precisa de ajuda?
        </h3>
        
        <a  href="https://wa.me/5585992819050?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20óculos." 
            target='_blank'
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                        bg-gradient-to-r from-brand-primary to-brand-secondary" 
        >
              <FontAwesomeIcon icon={faCheck} className="mr-3 text-xl" />  
              CONVERSAR COM ESPECIALISTA
        </a>
      </div>
    </section>
  );
}

function ProdutoCard({ arm }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow-md text-left transition duration-300 hover:shadow-xl">
      <div className="flex justify-center items-center">
        <div
          className="rounded-full flex items-center justify-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={hover ? arm.armacaoLateral : arm.armacaoFrente}
            alt={arm.alt}
            className="w-full h-auto aspect-square object-cover  transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
