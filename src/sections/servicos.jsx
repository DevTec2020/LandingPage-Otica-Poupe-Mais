import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldHalved,faDollarSign, faGlasses} from "@fortawesome/free-solid-svg-icons";

export default function Servicos(){
    return(
        <section>
        <div className="container mx-auto px-4">
            <div className="relative z-30 -mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto max-w-6xl px-4">
                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center border-b-4 border-brand-secondary">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faGlasses} size="4x" className="w-8 h-8 mb-2 text-brand-primary"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Temos modelos Variados para seu estilo</h3>
                </div>

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center border-b-4 border-brand-secondary">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faShieldHalved} size="4x" className="w-8 h-8 mb-2 text-brand-primary"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Garantia Total contra Defeitos de Fabricação</h3>
                </div>

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center border-b-4 border-brand-secondary">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faClock} size="4x" className="w-8 h-8 mb-2 text-brand-primary"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Entregamos seu óculos em até 59 minutos</h3>
                </div>

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center border-b-4 border-brand-secondary">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faDollarSign} size="4x" className="w-8 h-8 mb-2 text-brand-primary"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Temos os melhores preços da região</h3>
                </div>
            </div>
        </div>
    </section>
    )
}