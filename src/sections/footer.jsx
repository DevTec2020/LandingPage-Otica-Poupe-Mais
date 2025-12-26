import Logo from "../assets/Logo_amarela.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
  return (
    <>
    <footer className="bg-brand-dark text-white py-8 border-t-2 border-brand-secondary">
      <div className="container lg:mx-auto px-4">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between">
            <a href="#" className="flex mb-8 lg:mb-0">
                <div className="flex flex-1 items-center mb-4">
                    <img src={Logo} alt="Logo Ótica" className=" h-20 md:h-30 rounded-lg object-cover"/>
                </div>
            </a>
            
            <div className="flex flex-col justify-center md:items-start">
                <h2 className="font-bold text-2xl uppercase">Ótica Poupe Mais</h2>
                <div className="space-y-1 mt-6">
                    <h3 className="text-md font-bold mb-2">ENTRE EM CONTATO</h3>
                    <div className="flex items-start">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2 mt-1 w-4 h-4"/>
                        <span>R. Joaquim Felício, 395 - Lj-01 - Messejana, Fortaleza - CE</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4"/> 
                        <span>(85) 99281-9050</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4"/>
                        <span>oticapoupemais@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4"/>
                        <span>Seg-Sex: 8h às 17h</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center mt-8 lg:mt-0">
                <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/ótica-poupe-mais-36b10b397/" target="_blank" rel="noopener noreferrer" 
                        className="bg-brand-blue-light hover:bg-brand-blue-light/90 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                    </a>
                    <a href="https://www.instagram.com/oticapoupemais" target="_blank" rel="noopener noreferrer"
                        className="bg-brand-blue-light hover:bg-brand-blue-light/90 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <FontAwesomeIcon icon={faInstagram} size="xl"/>
                    </a>
                    <a href="https://wa.me/85992819050?text=Olá,%20vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20os%20óculos." target="_blank" rel="noopener noreferrer"
                        className="bg-brand-blue-light hover:bg-brand-blue-light/90 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
                    </a>
                    <a href="mailto:oticapoupemais@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="bg-brand-blue-light hover:bg-brand-blue-light/90 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                    </a>
                </div>
            </div>
        </div>
        
        

        <div className="mt-8 pt-5 border-t border-gray-700">
            <div className="md:flex md:flex-wrap md:items-center md:justify-between px-3 lg:px-0">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm uppercase">Óticas Poupe Mais - CNPJ: 61.995.602.0001-10</p>
                </div>

                <div className="mt-4 md:mt-2 lg:mt-0 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        <span>
                            Desenvolvido por <a href="https://www.tecnoldeskservicos.com.br" target="_blank" rel="noopener noreferrer" className="font-bold">TecnolDesk Serviços</a>
                        </span>
                    </p>
                </div>
                
                <div className="mt-4 md:mt-0 text-center md:text-right">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Óticas Poupe Mais. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
    </>
  )
}
