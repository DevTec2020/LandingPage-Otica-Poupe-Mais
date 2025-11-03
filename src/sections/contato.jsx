import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Fachada from "../assets/loja.webp"

export default function Contato(){
    return(
        <section id='contato' className="bg-gradient-to-tl from-brand-primary/30 to-brand-secondary py-10">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="max-w-7xl">
                    <h2 className="text-3xl md:text-3xl font-extrabold mb-10 text-gray-700 uppercase">
                        Venha conhecer nossas unidades
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div className="p-4 border-2 rounded-xl shadow-lg transition duration-300 hover:bg-white/10" >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full  mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada}
                                        alt="Fachada Loja"
                                        className="rounded-2xl w-full h-auto object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-full"> 
                                    <div className="text-brand-yellow mb-2">  
                                        <h3 className="font-extrabold text-2xl text-gray-600 uppercase">
                                            Ótica Poupe Mais
                                        </h3>
                                        <p>Messejana, Fortaleza - CE</p>
                                    </div>

                                    <h3 className="text-md font-bold text-gray-600 my-2">ENTRE EM CONTATO</h3>

                                    <div className="flex flex-col items-start justify-center">
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 mt-1 w-4 h-4"/>
                                            <span>R. Joaquim Felício, 395 - Lj-01</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4"/> 
                                            <span>(85) 99281-9050</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4"/>
                                            <span>email@dominio.com.br</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4"/>
                                            <span>Seg-Sex: 8h às 17h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
                                        target='_blank' 
                                        className="inline-flex items-center justify-center px-4 py-2 mt-6 md:text-xl font-normal rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                                            bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className=" text-2xl" /> 
                                        <span>Enviar Mensagem</span>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-2 rounded-xl shadow-lg transition duration-300 hover:bg-white/10" >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full  mb-6 md:mb-0 md:mr-6"> 
                                    <img
                                        src={Fachada}
                                        alt="Fachada Loja"
                                        className="rounded-2xl w-full h-auto object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-full"> 
                                    <div className="text-brand-yellow mb-2">  
                                        <h3 className="font-extrabold text-2xl text-gray-600 uppercase">
                                            Ótica Poupe Mais
                                        </h3>
                                        <p>Messejana, Fortaleza - CE</p>
                                    </div>

                                    <h3 className="text-md font-bold text-gray-600 my-2">ENTRE EM CONTATO</h3>

                                    <div className="flex flex-col items-start justify-center">
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 mt-1 w-4 h-4"/>
                                            <span>R. Joaquim Felício, 395 - Lj-01</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4"/> 
                                            <span>(85) 99281-9050</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4"/>
                                            <span>email@dominio.com.br</span>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4"/>
                                            <span>Seg-Sex: 8h às 17h</span>
                                        </p>
                                    </div>

                                    <a 
                                        href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%20óculos." 
                                        target='_blank' 
                                        className="inline-flex items-center justify-center px-4 py-2 mt-6 md:text-xl font-normal rounded-xl text-white shadow-xl transition duration-300 transform hover:scale-105 
                                            bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className=" text-2xl" /> 
                                        <span>Enviar Mensagem</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>





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