import Pay from "../assets/pagamento.webp"
import Logo from "../assets/Logo_amarela.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Oferta() {
  return (
    <section id="ofertas" className="-mt-210 md:-mt-95 lg:-mt-40 pt-230 md:pt-110 lg:pt-50 pb-16 px-6 bg-gradient-to-b from-brand-primary/60 to-brand-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

        {/* Lado Esquerdo – Dores */}
        <div data-aos="fade-right" data-aos-delay="100" 
          className="flex flex-col justify-center w-full lg:w-1/2 text-gray-800">
          <h3 className="text-3xl font-bold mb-6 leading-snug text-gray-900 text-center md:text-left uppercase">
            Cansado(a) de se frustrar em outras óticas?
          </h3>

          <ul className="space-y-3 text-xl text-gray-700">
            <li className="flex md:items-center gap-2">
              <FontAwesomeIcon icon={faXmark} className="text-red-600 pt-1" />
              Atrasos intermináveis na entrega dos óculos.
            </li>
            <li className="flex md:items-center gap-2">
              <FontAwesomeIcon icon={faXmark} className="text-red-600 pt-1" />
              Ter que voltar várias vezes para ajustes.
            </li>
            <li className="flex md:items-center gap-2">
              <FontAwesomeIcon icon={faXmark} className="text-red-600 pt-1" />
              Falta de clareza e atendimento confuso.
            </li>
          </ul>

          <p className="mt-6 text-lg italic">
            <span className="font-bold text-brand-dark">Na Ótica Poupe Mais,</span> tudo é diferente — rapidez, qualidade e transparência do início ao fim.
          </p>
        </div>

        {/* Lado Direito – Oferta */}
        <div data-aos="fade-left" data-aos-delay="100" 
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-4 md:p-20 text-center relative z-10">
          <img src={Logo} alt="Logo Ótica Poupe Mais" className="mx-auto mb-6 w-82" />

          <p className="text-xl font-semibold text-gray-700 mb-6">
            Qualidade, agilidade e 
            <span className="text-green-600 font-bold"> o melhor preço da cidade!</span>
          </p>

          <div className="bg-yellow-50 border-4 border-dashed border-yellow-400 py-6  rounded-xl mb-8">
            <p className="text-lg font-bold text-gray-700 mb-1">Óculos completo a partir de</p>
            <div className="flex justify-center font-extrabold text-green-600">
              <span className="text-2xl mt-4 self-start">R$</span>
              <span className="text-8xl">249</span>
              <span className="text-4xl self-end">,00</span>
            </div>
            <p className="mt-2 text-md">*Parcelamos em até 10x de 24,90</p>
          </div>

          <button
            className="w-full px-8 py-3 text-xl md:text-2xl font-bold text-white cursor-pointer rounded-xl shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:bg-green-600 hover:scale-105 transition-transform duration-300"
          >             
            QUERO MEU ÓCULOS NOVO!
          </button>

          <div className="mt-6 text-sm text-gray-600">
            <p>Parcelamos em até <span className="font-bold">10x sem juros nos cartões</span>.</p>
            <div className="flex justify-center mt-2">
              <img src={Pay} alt="Bandeiras de Cartão" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
