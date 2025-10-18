import AOS from 'aos'; 

import hero2 from "../assets/hero2.jpg";


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
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="flex flex-col items-center max-w-6xl px-4 lg:px-8"
                >
                    <h1 className="text-3xl md:text-5xl text-center  font-extrabold leading-tight mb-4 text-shadow-lg">
                        Sua visão merece o melhor
                    </h1>
                        
                    <p className="text-amber-400 text-5xl text-center md:text-7xl font-extrabold drop-shadow-2xl"> 
                        Óculos com descontos incríveis! 
                    </p>

                    <button className="mt-12 px-14 py-5 text-2xl font-black rounded-full text-black shadow-2xl transition duration-300 transform hover:scale-110 bg-amber-300 animate-pulse hover:animate-none">
                        APROVEITAR OFERTAS EXCLUSIVAS
                    </button>
                </div>
            </div>
        </div>
    )
}