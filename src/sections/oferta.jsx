export default function Oferta(){
    return(
        <section className="py-16 px-4 bg-amber-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            
            {/* Bloco de Desvantagens Esquerdo */}
            <div className="w-full lg:w-1/2 p-6 rounded-xl text-gray-800">
                <h3 className="text-2xl font-bold mb-4">CANSADO(A) DE PASSAR POR SITUAÇÕES COMO ESTAS EM OUTRAS ÓTICAS POR AÍ?</h3>
                <ul className="space-y-3 list-none">
                    <li className="flex items-start text-lg">
                        <span className="text-red-600 font-extrabold mr-2 mt-1">X</span>
                        Atraso na entrega dos óculos.
                    </li>
                    <li className="flex items-start text-lg">
                        <span className="text-red-600 font-extrabold mr-2 mt-1">X</span>
                        Ter que voltar várias vezes na loja.
                    </li>
                    <li className="flex items-start text-lg">
                        <span className="text-red-600 font-extrabold mr-2 mt-1">X</span>
                        Dúvidas sobre o produto comprado.
                    </li>
                    <li className="flex items-start text-lg">
                        <span className="text-red-600 font-extrabold mr-2 mt-1">X</span>
                        Falta de informação clara.
                    </li>
                </ul>
                <p className="mt-4 text-sm italic">
                    <span className="font-bold">Na Ótica Poupe Mais, isso é passado!</span>
                </p>
            </div>

            {/* Caixa de Oferta Direita */}
            <div className="w-full lg:w-1/2 p-8 rounded-xl shadow-2xl text-center bg-white">
                <div className="flex justify-center mb-4">
                    <img src="" alt="Oferta Especial" className="w-24 h-24 rounded-full border-4 border-yellow-400"/>
                </div>
                <h4 className="text-3xl font-extrabold mb-2 text-green-500 uppercase">
                    Ótica Poupe Mais
                </h4>
                <p className="text-xl font-semibold mb-4 text-gray-600">
                    O ÚNICO LUGAR ONDE VOCÊ ENCONTRA QUALIDADE E AGILIDADE.
                </p>
                <div className="bg-yellow-100 border-4 border-dashed border-yellow-400 p-4 rounded-lg mb-6">
                    <p className="text-3xl font-bold text-gray-500 line-through">R$ 500,00</p>
                    <p className="text-6xl font-extrabold text-green-500">
                        R$ <span className="text-8xl">299</span>
                    </p>
                </div>

                <button 
                    className="w-full py-4 text-2xl font-extrabold text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105 bg-green-500"
                >
                    QUERO MEUS NOVOS ÓCULOS
                </button>
                <div className="mt-3 text-sm text-gray-600">
                    <p>Em até 12x no cartão de crédito.</p>
                    <div className="flex justify-center mt-2 space-x-2">
                        <img src="https://logowik.com/content/uploads/images/visa-and-mastercard9421.logowik.com.webp" alt="Bandeira Cartões" className="h-4"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}