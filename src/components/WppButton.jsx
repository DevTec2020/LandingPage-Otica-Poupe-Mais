
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function WppButton(){
    return (
        <div className="floating-whatsapp">
            <a href="https://wa.me/5581981172272?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
                className="hidden sm:fixed sm:bottom-6 sm:right-6 sm:flex sm:bg-green-500 text-white w-14 h-14 rounded-full items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition animate-bounce delay-100"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="text-4xl"/>
            </a>   
        </div>
    )
}