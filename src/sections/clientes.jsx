import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Clientes() {
  const COLORS = {
    lightGray: "#f3f4f6", // equivalente ao Tailwind gray-100
  };

  const reviews = [
    {
      name: "Maria C.",
      text: "Atendimento incrível, óculos pronto em menos de 1 hora! Recomendo a todos.",
      rating: 5,
    },
    {
      name: "João V.",
      text: "Os melhores preços e a qualidade é superior. Minha visão melhorou muito!",
      rating: 5,
    },
    {
      name: "Ana P.",
      text: "Profissionais atenciosos. Senti segurança na compra. 5 estrelas merecidas.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-16 px-4 text-center"
      style={{ backgroundColor: COLORS.lightGray }}
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-gray-500 uppercase">
        Veja o que nossos clientes estão dizendo.
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-left transition duration-300 hover:shadow-xl"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-bold text-gray-700">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-800">{review.name}</p>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{review.text}"</p>
          </div>
        ))}
      </div>

      
    </section>
  );
}
