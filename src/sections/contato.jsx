import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function Contato(){
    return(
        <section id='contato' className="bg-gradient-to-tl from-brand-primary/30 to-brand-secondary py-10">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="max-w-5xl ">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-black uppercase">
                        Fale com um de nossos consultores
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-700 mb-10">
                        Receba seu orçamento e agende sua visita.
                    </p>

                    <a 
                        href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
                        target='_blank' 
                        className="inline-flex items-center justify-center px-8 py-4 md:text-xl font-bold rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                            bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="mr-3 text-2xl" /> 
                        AGENDAR VIA WHATSAPP
                    </a>

                    <p className="mt-4 text-md text-gray-600">
                        Resposta imediata em horário comercial.
                    </p>
                </div>

                
            </div>
        </section>
    )
}