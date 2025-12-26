import Header from "./sections/header"
import Hero from "./sections/hero"
import Servicos from "./sections/servicos"
import Oferta from "./sections/oferta"
import Produtos from "./sections/produtos"
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
      <Produtos/>
      <Contato/>
      <Galeria/>
      <Footer/>
    </>
  )
}

export default App
