import Header from "./sections/header"
import Hero1 from "./sections/hero1"
import Oferta from "./sections/oferta"
import Clientes from "./sections/clientes"
import Qualidade from "./sections/qualidade"
import Galeria from "./sections/galeria"
import Footer from "./sections/footer"

import Servicos from "./sections/servicos"
import Contato from "./sections/contato"

// import 'aos/dist/aos.css';
// import AOS from 'aos';


function App() {
  // AOS.init({
  //     duration: 1000,
  //     once: true
  // });

  return (
    <>
      <Header/>
      <Hero1/>
      <Servicos/>
      <Oferta/>
      <Clientes/>
      <Galeria/>
      <Contato/>
      <Footer/>
      {/* <Qualidade/>
      <Contato/>
      <Footer/>  */}
    
      
     

    </>
  )
}

export default App
