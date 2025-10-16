
export default function Slide1(){
    return(
        <div className="absolute inset-0 bg-brand-primary/10 text-white flex flex-col items-center justify-center text-center px-4 ">
            <h1 className="text-center text-3xl md:text-6xl font-bold lg:w-[100vh]">
                <span className="">Conte com a
                <span className="text-brand-primary"> Ótica Poupe Mais </span> para 
                <span className="text-brand-primary"> otimizar a produtividade </span> 
                da sua empresa</span>
            </h1>                     
            <h2 className="mt-5 md:text-2xl">Muito além de produtos, uma parceria de confiança.</h2>
                                
            <button className="mt-10 px-12 py-4 text-xl font-bold rounded-full text-black shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 mb-4">
                FALAR COM UM CONSULTOR
            </button>
            
        </div>
        
    )
}