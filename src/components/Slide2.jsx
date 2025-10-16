import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Slide2(){
    return(
        <div className="w-full max-w-7xl mx-auto p-4 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Bloco de Texto e CTA */}
        <div className="w-full lg:w-1/2 text-center text-white lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
            RECEBA SEU ÓCULOS <br className="hidden md:inline" /> DE GRAU COMPLETO
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-amber-300">
            EM 1 HORA OU MENOS
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6 max-w-md">
            Na hora marcada. Consulte as regras.
          </p>

          <button className="px-12 py-4 text-xl font-bold rounded-full text-black shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 mb-4">
            FALAR COM UM CONSULTOR
          </button>
          <div className="flex justify-center items-center  gap-1">
            <FontAwesomeIcon icon={faCheck} size="lg"/>
            <p className="text-sm flex items-center justify-center lg:justify-start">
              Aceitamos <span className="font-bold ml-1">PIX, VISA e MASTERCARD</span>
            </p>
          </div>
        </div>
      </div>
        
    )
}