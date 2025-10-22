import hero2 from "../assets/hero2.webp";

export default function Slide2(){
    return(
        <div className="absolute inset-0 w-full h-full">
            {/* Imagem de Fundo */}
            <img
                src={hero2}
                alt="Imagem de fundo do slide com modelos de óculos"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            {/* Overlay Escuro para Legibilidade */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Conteúdo Principal */}
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4 text-white">
                <div 
                    className="flex flex-col items-center max-w-7xl px-2 lg:px-8"
                >
                    
                    {/* Linha de Chamada (Problema Resolvido) */}
                    <p className="text-xl md:text-2xl font-semibold mb-3 text-shadow-lg tracking-wide text-center">
                        Chegou a hora de cuidar da sua visão com economia!
                    </p>

                    {/* TÍTULO PRINCIPAL - Foco no Desconto */}
                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4 text-center text-shadow-xl">
                        Óculos de qualidade com<br/>
                        <span className="text-amber-400 uppercase">valores que cabem no seu bolso</span>
                    </h1>
                    
                    {/* Subtítulo de Apoio */}
                    <p className="text-lg md:text-xl font-medium mb-10 text-center text-white/90"> 
                         Armações, lentes e solares com condições imperdíveis.
                    </p>


                    {/* Botão de Ação (CTA) - Foco em "Ver Ofertas" */}
                    <button className="mt-4 px-12 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-110 bg-amber-300 animate-pulse hover:animate-none">
                        VER OFERTAS EXCLUSIVAS
                    </button>
                    
                    

                </div>
            </div>
        </div>
    )
}