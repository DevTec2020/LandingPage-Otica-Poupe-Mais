import hero2 from "../assets/hero2.webp";

export default function Slide2(){
    return(
        <div className="absolute inset-0 w-full h-full">
            <img
                src={hero2}
                alt="Imagem de fundo do slide"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-white">
                <div 
                    className="flex flex-col items-center max-w-7xl px-2 lg:px-8"
                >
                    <h1 className="text-4xl md:text-5xl text-center  font-extrabold  mb-4 text-shadow-lg">
                        Sua visão merece o melhor
                    </h1>
                        
                    <p className="text-amber-400 text-5xl md:text-7xl text-center  font-extrabold drop-shadow-2xl"> 
                        Óculos com descontos incríveis! 
                    </p>

                    <button className="mt-12 px-10 py-5 text-xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-110 bg-amber-300 animate-pulse hover:animate-none">
                        APROVEITAR OFERTAS
                    </button>
                </div>
            </div>
        </div>
    )
}