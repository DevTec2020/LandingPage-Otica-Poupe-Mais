import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTruck,
  faShieldHalved,
  faLocationDot,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const COLORS = {
    green: "#16a34a", // mesma cor do Tailwind "green-600"
  };

  const features = [
    { icon: faClock, text: "Óculos prontos rapidamente" },
    { icon: faTruck, text: "Entrega rápida" },
    { icon: faShieldHalved, text: "Garantia total" },
    { icon: faLocationDot, text: "Mais de 100 lojas" },
  ];

  return (
    <section className="min-h-[700px] flex flex-col items-center bg-black/80 text-white">
      <div className="w-full max-w-7xl mx-auto p-4 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Bloco de Texto e CTA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
            RECEBA SEU ÓCULOS <br className="hidden md:inline" /> DE GRAU COMPLETO
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-amber-300">
            EM 1 HORA OU MENOS
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6 max-w-md">
            Na hora marcada. Consulte as regras.
          </p>

          <button className="px-12 py-4 text-xl font-bold rounded-full text-black shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-amber-300 mb-4">
            FALAR COM UM CONSULTOR
          </button>
          <div className="flex justify-center items-center  gap-1">
            <FontAwesomeIcon icon={faCheck} size="lg"/>
            <p className="text-sm flex items-center justify-center lg:justify-start">
              Aceitamos <span className="font-bold ml-1">PIX, VISA e MASTERCARD</span>
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src=""
            alt="Mulher sorrindo com óculos de grau modernos"
            className="w-full max-w-sm rounded-lg shadow-2xl object-cover"
          />
          <div className="absolute top-4 right-4 lg:top-0 lg:-right-10">
            {/* Timer ou outro componente */}
          </div>
        </div>
      </div>

      {/* Proposições de valor */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center h-26  p-4 bg-white rounded-lg shadow-xl text-center"
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="xl"
              className="w-8 h-8 mb-2 text-green-600"
            />
            <p className="text-mg font-semibold text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
