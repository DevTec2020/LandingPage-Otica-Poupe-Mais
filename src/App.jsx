import { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true
    });
  }, []);

  return (
    <>
      {/* --- SEO E METADADOS --- */}
      <title>Ótica Poupe Mais | Óculos e Lentes em Fortaleza - CE</title>
      <meta name="description" content="A melhor ótica de Fortaleza. Lentes multifocais, armações modernas e o melhor preço. Visite a Ótica Poupe Mais!" />
      
      {/* Tags Open Graph para WhatsApp/Instagram */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ótica Poupe Mais - Mais feliz com você" />
      <meta property="og:description" content="Lentes e armações com o melhor preço de Fortaleza. Confira nossas ofertas!" />
      <meta property="og:image" content="https://landing-page-otica-poupe-mais.vercel.app/Ico_bg_b.webp" />
      <meta property="og:url" content="https://landing-page-otica-poupe-mais.vercel.app" />

      {/* --- SECTIONS --- */}
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
