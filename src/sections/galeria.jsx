import person1 from "../assets/Clientes/person1.webp"
import person2 from "../assets/Clientes/person2.webp"
import person3 from "../assets/Clientes/person3.webp"
import person4 from "../assets/Clientes/person4.webp"

export default function Galeria(){
    const GALLERY_IMAGE_URLS = [
    person1,
    person2,
    person3,
    person4,
    // Adicione mais imagens conforme necessário
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-800">
        QUEM ENTENDE DE IMAGEM ESCOLHE A{" "}
        <span className="text-green-600 uppercase">Ótica Poupe Mais</span>
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_IMAGE_URLS.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <img
              src={url}
              alt={`Pessoa satisfeita ${index + 1}`}
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}