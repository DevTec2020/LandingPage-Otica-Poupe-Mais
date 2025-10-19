import hero3 from "../assets/hero3.webp";

export default function Slide3(){
    return(
        <div className="absolute inset-0 w-full h-full">
            <img
                src={hero3}
                alt="Imagem de fundo do slide"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
                <div 
                    className="w-full text-white flex flex-col items-center max-w-7xl px-4 lg:px-8"
                >
                    <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-snug mb-4 uppercase text-shadow-lg">
                        Chega de esperar
                    </h1>
                    
                    <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-8 text-amber-400 drop-shadow-2xl">
                        Entregamos seus óculos em tempo recorde
                    </h2>
                    
                    <button className="mt-6 px-10 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-110 bg-amber-300 animate-pulse hover:animate-none">
                        FAÇA SEU PEDIDO
                    </button>
                </div>
            </div>
        </div>
    )
}