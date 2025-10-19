import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Pay from "../assets/pagamento.webp"
import hero1 from "../assets/hero1.webp";


export default function Slide1(){
    return(
        <div className="absolute inset-0 w-full h-full">
                <img
                    src={hero1}
                    alt="Imagem de fundo do slide"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    loading="lazy"
                />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
                <div 
                    className="w-full text-white flex flex-col items-center lg:items-start max-w-7xl px-4 lg:px-8"
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-2 text-shadow-lg uppercase">
                        Compre seu óculos de grau
                    </h1>
                    <h2 className="text-4xl md:text-8xl font-extrabold mb-6 text-amber-400 uppercase">
                        e ganhe um solar!
                    </h2>

                    <button className="px-10 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 mb-6 animate-pulse hover:animate-none">
                        PEÇA SEU ORÇAMENTO!
                    </button>
                            
                    <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faCheck} size="lg" className="text-amber-400"/>
                        <p className="text-base font-semibold flex items-center justify-center lg:justify-start">
                            Aceitamos <span className="font-extrabold ml-1">PIX, VISA e MASTERCARD</span>
                        </p>
                    </div>
            
                    <img src={Pay} alt="Métodos de Pagamento" className="w-[40vh] mt-4" />

                </div>
            </div>
        </div>
    )
}