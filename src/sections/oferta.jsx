import Pay from "../assets/pagamento.webp"
import Logo from "../assets/Logo_amarela.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Oferta(){
    return(
        <section className="py-16 px-4 -mt-40 bg-brand-secondary ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row mt-40 gap-8">
            
            {/* Bloco de Desvantagens Esquerdo */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 rounded-xl text-gray-800">
                <h3 className="text-2xl font-bold mb-4">CANSADO(A) DE PASSAR POR SITUAÇÕES COMO ESTAS EM OUTRAS ÓTICAS ?</h3>
                <ul className="space-y-3 list-none text-gray-600">
                    <li className="flex items-center text-lg gap-1">
                        <FontAwesomeIcon icon={faXmark} size="1x" className="text-red-600" />
                        Atraso na entrega dos óculos.
                    </li>
                    <li className="flex items-center text-lg gap-1">
                        <FontAwesomeIcon icon={faXmark} size="1x" className="text-red-600" />
                        Ter que voltar várias vezes na loja.
                    </li>
                    <li className="flex items-center text-lg gap-1">
                        <FontAwesomeIcon icon={faXmark} size="1x" className="text-red-600" />
                        Dúvidas sobre o produto comprado.
                    </li>
                    <li className="flex items-center text-lg gap-1">
                        <FontAwesomeIcon icon={faXmark} size="1x" className="text-red-600" />
                        Falta de informações claras.
                    </li>
                </ul>
                <p className="mt-4 text-md italic">
                    <span className="font-bold">Na Ótica Poupe Mais, isso é passado!</span>
                </p>
            </div>

            {/* Caixa de Oferta Direita */}
            <div className="w-full lg:w-1/2 p-8 rounded-xl shadow-2xl text-center bg-white">
                <img src={Logo} alt="img logo" className="mb-8" />
                <p className="text-xl font-semibold mb-4 text-gray-600">
                    O ÚNICO LUGAR ONDE VOCÊ ENCONTRA QUALIDADE E AGILIDADE.
                </p>
                <div className="bg-yellow-100 border-4 border-dashed border-yellow-400 p-4 rounded-lg mb-6">
                    <p className="text-md">Seu óculos completo a partir de:</p>
                    <p className="text-4xl font-extrabold text-green-500">
                        R$<span className="text-8xl">600</span>
                    </p>
                </div>

                <button 
                    className="w-full py-4 text-2xl font-extrabold text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105 bg-green-500"
                >
                    QUERO MEUS ÓCULOS NOVOS 
                </button>
                <div className="mt-7 text-sm text-gray-600">
                    <p>Em até 12x no cartão de crédito.</p>
                    <div className="flex justify-center mt-2 space-x-2">
                        <img src={Pay} alt="Bandeira Cartões" className="h-12"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}