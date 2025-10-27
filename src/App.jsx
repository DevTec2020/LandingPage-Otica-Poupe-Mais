import Header from "./sections/header"
import Hero from "./sections/hero"
import Servicos from "./sections/servicos"
import Oferta from "./sections/oferta"
import Clientes from "./sections/clientes"
import Contato from "./sections/contato"
import Galeria from "./sections/galeria"
import Footer from "./sections/footer"

import 'aos/dist/aos.css';
import AOS from 'aos';


function App() {
  AOS.init({
      duration: 1000,
      once: true
  });

  return (
    <>
      <Header/>
      <Hero/>
      <Servicos/>
      <Oferta/>
      <Clientes/>
      <Contato/>
      <Galeria/>
      <Footer/>
    </>
  )
}

export default App
