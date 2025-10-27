import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Pay from "../assets/pagamento.webp";
import hero1 from "../assets/hero1.png";


export default function Hero(){
    return(
        <div className="relative h-[80vh] md:h-[70vh] overflow-hidden bg-gradient-to-tl from-brand-primary/30 to-brand-secondary">
            {/* Imagem de Fundo */}
            <img
                src={hero1}
                alt="Imagem de fundo da promoção de óculos"
                className="w-full h-full object-cover lg:object-contain lg:object-right-bottom opacity-20 lg:opacity-100"
                loading="lazy"
            />

            {/* Overlay Escuro para Legibilidade */}
            {/* <div className="absolute inset-0 bg-black/9 z-10"></div> */}

            {/* Conteúdo Principal */}
            <div className="absolute inset-0 z-30 flex items-center p-4">
                <div 
                    className="w-[70vh] text-white flex flex-col items-center lg:items-start  px-4 lg:px-10 "
                >
                    
                    {/* TÍTULO PRINCIPAL - Foco no benefício */}
                    <div className="leading-tight mb-8 text-center lg:text-left text-shadow-xl uppercase">
                        <span className="text-xl md:text-3xl text-black font-bold">Compre Óculos de Grau e</span> 
                        <p className="text-3xl md:text-6xl font-extrabold title-shadow">
                            <span className="text-white ">GANHE</span> <span className="">um Solar Exclusivo</span>
                        </p>
                    </div>

                    {/* Botão de Ação (CTA) - Chamativo e Pulsante */}
                    <button className="px-12 py-5 text-xl font-black rounded-full 
                        text-brand-dark 
                        shadow-2xl transition duration-300 transform hover:scale-105 
                        bg-gradient-to-b from-brand-primary to-brand-secondary 
                        mb-8 animate-bounce hover:animate-none">
                        APROVEITE AGORA!
                    </button>
                    
                    
                        
                        {/* Selo de Garantia/Oferta */}
                        <div className="flex items-start md:items-center gap-2 bg-gray-400/30  p-2 rounded-lg max-w-[35vh] md:max-w-full">
                            <FontAwesomeIcon icon={faCheck} size="lg" className="text-green-600 pt-1 md:pt-0"/>
                            <p className="text-lg font-semibold tracking-wide text-white "> {/* Adicionado 'text-white' para segurança */}
                                <span className="font-extrabold text-green-600 ">Dupla Proteção</span> garantida para sua visão.
                            </p>
                        </div>
                        
                        
                        
                </div>
            </div>
        </div>
    )
}