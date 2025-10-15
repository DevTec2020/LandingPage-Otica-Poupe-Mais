import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTruck, faShieldHalved, faLocationDot, faCheck, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Servicos(){
    return(
        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blak font-bold text-center mb-12">Por que escolher a Ótica Poupe Mais?</h2>
            
            
            
            
            
            <div className="  mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-6xl px-4">

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faShieldHalved} size="xl" className="w-8 h-8 mb-2 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Garantia Total</h3>
                    <p className="text-gray-400">Todos os nossos produtos possuem garantia de 1 ano contra defeitos de fabricação.</p>
                </div>

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faClock} size="xl" className="w-8 h-8 mb-2 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
                    <p className="text-gray-400">Receba seus óculos em até 48 horas após a aprovação do seu exame de vista.</p>
                </div>

                <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-xl text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FontAwesomeIcon icon={faDollarSign} size="xl" className="w-8 h-8 mb-2 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Preços Imbatíveis</h3>
                    <p className="text-gray-400">Temos os melhores preços da região com parcelamento em até 12x sem juros.</p>
                </div>
            </div>
        </div>
    </section>
    )
}