import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Fachada from "../assets/fachada.webp"
import Fachada2 from "../assets/loja.webp"


export default function Contato(){
    return(
        <section id='contato' className="bg-gradient-to-b from-brand-primary/60 to-brand-secondary py-16">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-white title-shadow uppercase">
                        Visite uma de Nossas Unidades
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4"> 
                        
                        {/* Loja 1 */}
                        <div className="p-6 rounded-2xl shadow-2xl bg-white text-gray-800 transition duration-300 hover:shadow-brand-primary/50" >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-5/12 mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada}
                                        alt="Fachada Ótica Poupe Mais - Unidade Messejana"
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
                                            <span>oticapoupemais@gmail.com</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span className="font-semibold">Seg-Sex: 8h às 17h - Sab: 8h às 14h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/5585992819050?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas." 
                                        target='_blank'
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-6 text-lg font-bold rounded-full text-white shadow-lg transition duration-300 transform hover:scale-105 
                                                   bg-green-500 hover:bg-green-600 whitespace-nowrap" // Usei um verde puro para destaque do WhatsApp
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" /> 
                                        UNIDADE MESSEJANA
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Loja 2 */}
                        <div className="p-6 rounded-2xl shadow-2xl bg-white text-gray-800 transition duration-300 hover:shadow-brand-primary/50" >
                             <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-5/12 mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada2}
                                        alt="Fachada Ótica Poupe Mais - Unidade Centro"
                                        className="rounded-xl w-full h-auto aspect-square object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-full md:w-7/12 text-center md:text-left"> 
                                    <div className="mb-4">  
                                        <h3 className="font-extrabold text-2xl text-brand-primary uppercase mb-1"> 
                                            Ótica Poupe Mais
                                        </h3>
                                        <p className="text-sm">Centro, Fortaleza - CE</p>
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-600 my-2">FALE CONOSCO</h4>

                                    <div className="flex flex-col items-center md:items-start text-sm"> 
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>R. Major Facundo, 446</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-brand-primary"/> 
                                            <span>(85) 996406483</span>
                                        </p>
                                        <p className="mb-1">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span>oticapoupemais@gmail.com</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4 text-brand-primary"/>
                                            <span className="font-semibold mr-2">Seg-Sex: 8h às 17h - Sab: 8h às 14h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/5585996406483?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas." 
                                        target='_blank'
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-6 text-lg font-bold rounded-full text-white shadow-lg transition duration-300 transform hover:scale-105 
                                                   bg-green-500 hover:bg-green-600 whitespace-nowrap"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" /> 
                                        UNIDADE CENTRO
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10">
                       <h3 className="text-2xl font-bold mb-4 text-white  uppercase">
                            Não sabe qual escolher?
                        </h3>
                        
                        <a  href="https://wa.me/5585992819050?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                                       bg-gradient-to-r from-emerald-500 to-teal-600" 
                        >
                             <FontAwesomeIcon icon={faClock} className="mr-3 text-xl" /> 
                             AGENDAR HORÁRIO COM ESPECIALISTA
                        </a>
                        
                        
                    </div>

                </div>
            </div>
        </section>
    )
}