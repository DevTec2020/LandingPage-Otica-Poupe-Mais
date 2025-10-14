import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Qualidade() {
  const COLORS = {
    green: "#16a34a", // Tailwind green-600
  };

  const LAB_IMAGE_URL =
    "https://via.placeholder.com/600x400"; // Substitua pela sua imagem real

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto Esquerdo */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-extrabold mb-4 text-gray-800 flex items-center">
            <FontAwesomeIcon
              icon={faAward}
              className="w-8 h-8 mr-2"
              style={{ color: COLORS.green }}
            />
            GARANTIA DE QUALIDADE E AGILIDADE
          </h3>

          <h4 className="text-2xl font-semibold mb-6 text-gray-600">
            COM LABORATÓRIO PRÓPRIO
          </h4>

          <p className="text-lg text-gray-700 mb-4">
            Nosso laboratório interno nos permite controlar 100% da produção,
            garantindo a máxima qualidade e a velocidade de entrega prometida.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="w-5 h-5 mr-2 text-green-500"
              />
              Maior Precisão na Montagem.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="w-5 h-5 mr-2 text-green-500"
              />
              Sem atrasos de terceiros.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="w-5 h-5 mr-2 text-green-500"
              />
              Suporte técnico especializado.
            </li>
          </ul>
        </div>

        {/* Imagem Direita */}
        <div className="md:w-1/2">
          <img
            src={LAB_IMAGE_URL}
            alt="Mão trabalhando em uma lente de óculos"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};