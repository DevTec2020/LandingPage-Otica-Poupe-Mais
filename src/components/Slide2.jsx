
export default function Slide1(){
    return(
        <div className="absolute inset-0 bg-brand-primary/10 text-white flex flex-col items-center justify-center text-center px-4 ">
            <h1 className="text-center text-3xl md:text-4xl font-bold lg:w-[100vh] mb-3">
                Sua visão merece o melhor, e seu bolso também.
            </h1>
            <p className="text-brand-primary md:text-7xl font-extrabold"> Óculos com descontos incríveis! </p>

            <button className="mt-16 px-12 py-4 text-xl font-bold rounded-full text-black shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300">
                Veja as Ofertas
            </button>
            
        </div>
        
    )
}