export default function Footer(){
    return(
        <footer className="bg-dark border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <i data-feather="eye" className="text-primary w-6 h-6"></i>
                        <span className="text-xl font-bold text-primary">Ótica Poupe Mais</span>
                    </div>
                    <p className="text-gray-400">A ótica que cuida da sua visão e do seu bolso.</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Produtos</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Promoções</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Contato</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-400">
                            <i data-feather="map-pin" className="mr-2 w-4 h-4"></i> Av. Principal, 123 - Centro
                        </li>
                        <li className="flex items-center text-gray-400">
                            <i data-feather="phone" className="mr-2 w-4 h-4"></i> (11) 1234-5678
                        </li>
                        <li className="flex items-center text-gray-400">
                            <i data-feather="mail" className="mr-2 w-4 h-4"></i> contato@oticapoupemais.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i data-feather="facebook" className="w-6 h-6"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i data-feather="instagram" className="w-6 h-6"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i data-feather="twitter" className="w-6 h-6"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i data-feather="youtube" className="w-6 h-6"></i>
                        </a>
                    </div>
                    <div className="mt-6">
                        <h5 className="font-bold mb-2">Horário de Funcionamento</h5>
                        <p className="text-gray-400">Seg-Sex: 9h-18h Sáb: 9h-13h</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>© 2023 Ótica Poupe Mais. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    )
}