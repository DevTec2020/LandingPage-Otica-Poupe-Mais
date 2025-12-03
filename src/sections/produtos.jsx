import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import teste1 from "../assets/armacoes/teste1.png"
import teste2 from "../assets/armacoes/teste2.png"
import teste3 from "../assets/armacoes/teste3.png"
import teste4 from "../assets/armacoes/teste4.png"


export default function Produtos() {
  const COLORS = {
    lightGray: "#f3f4f6", // equivalente ao Tailwind gray-100
  };

  const armacoes = [
    {
      text: "Armação de Óculos de Grau xxxxxxx, modelo xxxxx, cor xxx,",
      image: teste1,
      valor: 111.11,
      parcela: 11.11
    },
    {
      text: "Armação de Óculos de Grau xxxxxxx, modelo xxxxx, cor xxx,",
      image: teste2,
      valor: 111.11,
      parcela: 11.11
    },
    {
      text: "Armação de Óculos de Grau xxxxxxx, modelo xxxxx, cor xxx,",
      image: teste3,
      valor: 111.11,
      parcela: 11.11
    },
    {
      text: "Armação de Óculos de Grau xxxxxxx, modelo xxxxx, cor xxx,",
      image: teste4,
      valor: 111.11,
      parcela: 11.11
    },
  ];

  return (
    <section
      className="py-16 px-4 text-center"
      style={{ backgroundColor: COLORS.lightGray }}
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-gray-500 uppercase">
        Armações em Destaque
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {armacoes.map((arm, index) => (
          <div
            key={index}
            className="px-6 py-4 bg-white rounded-lg shadow-md text-left transition duration-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-center mb-3">
              <div className="w-50 h-50 rounded-full flex items-center justify-center mr-3 font-bold text-gray-700 mb-4">
                <img src={arm.image} alt="" className="rounded-xl w-full h-auto aspect-square object-cover" />
              </div>

              <div>
                <p className="bg-brand-secondary max-w-30 py-1 px-2 rounded-lg text-sm font-semibold uppercase mb-2">10% off no pix</p>
                <h4 className="font-bold mb-4">{arm.text}</h4>
                <p className="font-bold text-2xl">R$: {arm.valor}</p>
                <p>
                  ou
                  <span className="font-bold"> 10x de R$: {arm.parcela} </span>
                  no credito
                </p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-white  uppercase">
            Não sabe qual escolher?
        </h3>
        
        <a  href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
            target='_blank' 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                        bg-gradient-to-r from-brand-primary to-brand-secondary" 
        >
              AGENDAR HORÁRIO COM ESPECIALISTA
        </a>
        
        
    </div> */}
      
    </section>
  );
}
