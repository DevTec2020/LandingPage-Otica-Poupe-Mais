import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Contato(){
    return(
        <section id='contato' className="bg-brand-secondary/40 py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* NOVO TEXTO À ESQUERDA (Foco no CTA) */}
                <div>
                
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
                        <span className="text-black">Fale com um de nossos consultores</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-700 max-w-xl mb-10">
                        Receba seu orçamento e agende sua visita.
                    </p>
                    
                    {/* O NOVO CTA: BOTÃO DE WHATSAPP GIGANTE COM GRADIENTE */}
<a 
    href="https://wa.me/558597228120?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20as%20ofertas%20de%C3%B3culos." 
    target='_blank' 
    className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold rounded-xl text-white shadow-lg transition duration-300 transform hover:scale-105 
        bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
        // ^-- AQUI ESTÃO AS NOVAS CLASSES DE GRADIENTE
>
    <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-2xl" /> 
    AGENDAR VIA WHATSAPP
</a>
                    
                    <p className="mt-4 text-sm text-gray-500">
                        Resposta imediata em horário comercial.
                    </p>
                </div>

                {/* Lado Direito (Informações) - MANTIDO INALTERADO */}
                <div className="bg-white rounded-xl shadow p-8">
                    <div className="bg-white p-8 h-full">
                        {/* ... (Todo o seu conteúdo original de informações de contato) ... */}
                        <h3 className="text-xl font-bold text-gray-500 mb-6">Nossas Informações</h3>
                        
                        <div className="flex items-start mb-8">
                            <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Telefone</h4>
                                <p className="text-gray-600">(85) 9722-8120 (WhatsApp)</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-8">
                            <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                            </div>
                            <div className="w-0 flex-1">
                                <h4 className="font-bold text-gray-800">E-mail</h4>
                                <a 
                                href="mailto:" 
                                className="text-gray-700 break-all hover:underline"
                                >
                                <span>email@dominio.com.br</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                <FontAwesomeIcon icon={faClock} className="text-xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Horário de Atendimento</h4>
                                <p className="text-gray-600">Segunda à Sexta: 8h às 17h</p><p></p>
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <h4 className="font-bold text-gray-800 mb-4">Siga-nos</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/" target='_blank' className="w-10 h-10 bg-brand-secondary/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://www.instagram.com/oticapoupemais" target='_blank' className="w-10 h-10 bg-brand-secondary/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

