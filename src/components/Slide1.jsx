import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Pay from "../assets/pagamento.webp";
import hero1 from "../assets/hero1.webp";


export default function Slide1(){
    return(
        <div className="absolute inset-0 w-full h-full">
            {/* Imagem de Fundo */}
            <img
                src={hero1}
                alt="Imagem de fundo da promoção de óculos"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            {/* Overlay Escuro para Legibilidade */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Conteúdo Principal */}
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
                <div 
                    className="w-full text-white flex flex-col items-center lg:items-start max-w-7xl px-4 lg:px-8"
                >
                    
                    {/* Linha de Chamada (Promoção) */}
                    <p className="text-xl md:text-2xl font-semibold mb-4 text-shadow-lg tracking-wider">
                        Aproveite nossa promoção exclusiva:
                    </p>

                    {/* TÍTULO PRINCIPAL - Foco no benefício */}
                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-center lg:text-left text-shadow-xl uppercase">
                        COMPRE 1 ÓCULOS<br/>
                        <span className="text-amber-400">E LEVE O SEGUNDO DE GRAÇA!</span>
                    </h1>

                    {/* Botão de Ação (CTA) - Chamativo e Pulsante */}
                    <button className="px-12 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 mb-8 animate-pulse hover:animate-none">
                        FAÇA SEU ORÇAMENTO AGORA!
                    </button>
                    
                    {/* Garantias / Detalhes */}
                    <div className="flex flex-col items-center lg:items-start gap-4 mt-4">
                        
                        {/* Selo de Garantia/Oferta */}
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                            <FontAwesomeIcon icon={faCheck} size="lg" className="text-amber-400"/>
                            <p className="text-lg font-semibold tracking-wide">
                                <span className="font-extrabold text-amber-400">Dupla Proteção</span> garantida para sua visão.
                            </p>
                        </div>
                        
                        {/* Pagamento */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mt-4">
                            <p className="text-base font-semibold mr-2">
                                Aceitamos:
                            </p>
                            <img src={Pay} alt="Métodos de Pagamento" className="w-[30vh] md:w-[25vh]" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}