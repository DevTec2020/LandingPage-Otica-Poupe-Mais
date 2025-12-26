import hero1 from "../assets/hero1.webp";
import Pay from "../assets/pagamento.webp"

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
                <h2 className="text-xl md:text-3xl font-bold text-white block title-shadow">
                    Compre Óculos de Grau e
                </h2>
                <h1 className="text-4xl md:text-7xl mt-4 font-extrabold title-shadow">
                    <span className="text-brand-primary">LEVE 1 ÓCULOS DE SOL GRÁTIS!</span>
                </h1>
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
                                mb-6 cursor-pointer"
                >
                    FALE CONOSCO PELO WHATSAPP
                </button>
            </a>

            <div className="flex flex-col items-center text-sm text-gray-600 space-y-2 text-center lg:text-left lg:items-start  w-full mt-2">
                <p>Aceitamos:</p>
                <img src={Pay} alt="Bandeiras de Cartão" className="h-10 brightness-75" />
            </div>

        </div>
      </div>
    </section>
  );
}
