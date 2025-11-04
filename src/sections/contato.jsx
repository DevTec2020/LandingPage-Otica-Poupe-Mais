import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Fachada from "../assets/loja.webp"

export default function Contato(){
    return(
        // Fundo escuro
        <section id='contato' className="bg-gradient-to-b from-brand-primary/60 to-brand-secondary py-16">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-white title-shadow uppercase">
                        Visite uma de Nossas Unidades
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4"> 
                        
                        {/* Bloco 1 */}
                        <div className="p-6 rounded-2xl shadow-2xl bg-white text-gray-800 transition duration-300 hover:shadow-brand-primary/50" >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-5/12 mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada}
                                        alt="Fachada Ótica Poupe Mais - Unidade 1"
                                        className="rounded-xl w-full h-auto aspect-square object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-full md:w-7/12 text-center md:text-left"> 
                                    <div className="mb-4">  
                                        <h3 className="font-extrabold text-2xl text-brand-primary uppercase mb-1"> 
                                            Ótica Poupe Mais
                                        </h3>
                                        <p className="text-sm">Messejana, Fortaleza - CE</p>
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-600 my-2">FALE CONOSCO</h4>

                                    <div className="flex flex-col items-center md:items-start text-sm"> 
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>R. Joaquim Felício, 395 - Lj-01</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-brand-primary"/> 
                                            <span>(85) 99281-9050</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>email@dominio.com.br</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span className="font-semibold">Seg-Sex: 8h às 17h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%C3%B3culos." 
                                        target='_blank' 
                                        className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-6 text-lg font-bold rounded-full text-white shadow-lg transition duration-300 transform hover:scale-105 
                                                   bg-green-500 hover:bg-green-600 whitespace-nowrap" // Usei um verde puro para destaque do WhatsApp
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" /> 
                                        FALAR COM UNIDADE 1
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Bloco 2 */}
                        <div className="p-6 rounded-2xl shadow-2xl bg-white text-gray-800 transition duration-300 hover:shadow-brand-primary/50" >
                             <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-5/12 mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada}
                                        alt="Fachada Ótica Poupe Mais - Unidade 2"
                                        className="rounded-xl w-full h-auto aspect-square object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-full md:w-7/12 text-center md:text-left"> 
                                    <div className="mb-4">  
                                        <h3 className="font-extrabold text-2xl text-brand-primary uppercase mb-1"> 
                                            Ótica Poupe Mais
                                        </h3>
                                        <p className="text-sm">Outro Bairro, Fortaleza - CE</p>
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-600 my-2">FALE CONOSCO</h4>

                                    <div className="flex flex-col items-center md:items-start text-sm"> 
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>Rua Exemplo de Endereço, 123</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-brand-primary"/> 
                                            <span>(85) 90000-0000</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>outroemail@dominio.com.br</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span className="font-semibold">Seg-Sex: 8h às 17h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%C3%B3culos." 
                                        target='_blank' 
                                        className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-6 text-lg font-bold rounded-full text-white shadow-lg transition duration-300 transform hover:scale-105 
                                                   bg-green-500 hover:bg-green-600 whitespace-nowrap"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" /> 
                                        FALAR COM UNIDADE 2
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10">
                       <h3 className="text-2xl font-bold mb-4 text-white  uppercase">
                            Não sabe qual escolher?
                        </h3>
                        
                        <a  href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
                            target='_blank' 
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                                       bg-gradient-to-r from-emerald-500 to-teal-600" 
                        >
                             <FontAwesomeIcon icon={faClock} className="mr-3 text-xl" /> 
                             AGENDAR HORÁRIO COM CONSULTOR GERAL
                        </a>
                        
                        
                    </div>

                </div>
            </div>
        </section>
    )
}