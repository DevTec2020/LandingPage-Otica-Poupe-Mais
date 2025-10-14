export default function Contato(){
    return(
        <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="bg-dark rounded-xl p-8 md:p-12 border border-primary/20 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Solicite um Orçamento</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2">Nome Completo</label>
                            <input type="text" id="name" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">E-mail</label>
                            <input type="email" id="email" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2">Telefone</label>
                        <input type="tel" id="phone" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2">Mensagem</label>
                        <textarea id="message" rows="4" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition">
                        Enviar Solicitação
                    </button>
                </form>
            </div>
        </div>
    </section>
    )
}