import hero3 from "../assets/hero3.webp";

export default function Slide3(){
    return(
        <div className="absolute inset-0 w-full h-full">
            {/* Imagem de Fundo */}
            <img
                src={hero3}
                alt="Imagem de fundo do slide com modelos de óculos"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            {/* Overlay Escuro para Legibilidade */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Conteúdo Principal */}
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
                <div 
                    className="w-full text-white flex flex-col items-center max-w-7xl px-4 lg:px-8"
                >
                    
                    {/* Linha de Chamada (Gatilho da Urgência) */}
                    <p className="text-xl md:text-2xl font-semibold mb-3 text-shadow-lg tracking-wide text-center">
                        Sua visão não pode esperar.
                    </p>

                    {/* TÍTULO PRINCIPAL - Foco no benefício da rapidez */}
                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8 text-center text-shadow-xl">
                        Óculos novos com<br/>
                        <span className="text-amber-400 uppercase">entrega em tempo recorde!</span>
                    </h1>
                    
                    {/* Botão de Ação (CTA) - FOCO EM COMPRA E RAPIDEZ */}
                    <button className="mt-6 px-12 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-110 bg-amber-300 animate-pulse hover:animate-none">
                        APROVEITAR AS OFERTAS
                    </button>
                    
                </div>
            </div>
        </div>
    )
}