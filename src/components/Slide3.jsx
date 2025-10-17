
export default function Slide3(){
    return(
        <div className="absolute inset-0 bg-brand-primary/10 text-white flex flex-col items-end justify-center text-center px-4 ">
            <div className="w-full lg:w-1/2 text-white lg:text-right flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4  uppercase">
                    Chega de esperar!
                </h1>
                <h2 className="text-4xl md:text-6xl max-w-[80vh] text-center font-extrabold mb-6 text-amber-300">
                    Entregamos seus óculos em tempo recorde
                </h2>
                <button className="px-12 py-4 text-xl font-bold rounded-full text-black shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 my-4">
                    Peça o Seu
                </button>
            </div>
            
        </div>
        
    )
}