import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import hero1 from "../assets/hero1.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-primary/15">
      {/* Imagem de fundo */}
      <img
        src={hero1}
        alt="Homem sorrindo com óculos de sol"
        className="absolute inset-0 w-full h-full object-cover opacity-25 lg:opacity-100"
        loading="lazy"
      />


      {/* Conteúdo principal */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col items-center lg:items-start text-center lg:text-left text-white py-20">
        <div className="max-w-2xl">
          <div className="leading-tight mb-8 uppercase">
            <span className="text-xl md:text-3xl font-bold text-white block title-shadow">
              Compre Óculos de Grau e
            </span>
            <p className="text-4xl md:text-7xl mt-4 font-extrabold title-shadow">
              <span className="text-brand-primary">LEVE 1 ÓCULOS DE SOL GRÁTIS!</span>
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/558597228120?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20promoção%20dos%20óculos."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-10 py-4 text-lg md:text-xl font-black rounded-full 
                         bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg 
                         transition-all duration-300 transform hover:scale-105 
                          mb-8"
            >
              FALE CONOSCO PELO WHATSAPP
            </button>
          </a>

          {/* Selo de Garantia */}
          {/* <div className="flex items-start md:items-center gap-2 bg-gray-600/20 backdrop-blur-sm p-3 rounded-lg max-w-md mx-auto lg:mx-0 ">
                <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                className="text-green-500 "
                />
                <p className="text-lg font-semibold ">
                <span className=" text-green-500">Proteção UV 400</span> garantida nas duas lentes.
                </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
