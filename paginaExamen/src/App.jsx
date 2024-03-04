import { Paraje } from "./componentes/Paraje.jsx";
import { Menu } from "./componentes/Menu.jsx";
import { Footer } from "./componentes/Footer.jsx";
import './App.css';
import foto6 from "./recursos/foto6.jpg";
import foto7 from "./recursos/foto7.jpg";
import foto8 from "./recursos/foto8.jpg";
import foto11 from "./recursos/foto11.jpg";

function App() {

  const parajes = [
    { claseDiv: "sierras", src: "src/recursos/foto2.jpg", alt: "foto2", claseP: "parajes", contenidoP: "Paraje Natural", contenidoH3: "Sierra de Aracena", claseInfo: "info", contenidoInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti rerum culpa ut a optio ratione accusamus quisquam aspernatur totam magnam distinctio, ab facere vitae quia blanditiis, cum autem maxime." },
    { claseDiv: "sierras", src: "src/recursos/foto10.jpg", alt: "foto10", claseP: "parajes", contenidoP: "Paraje Natural", contenidoH3: "Sierra de Aracena", claseInfo: "info", contenidoInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti rerum culpa ut a optio ratione accusamus quisquam aspernatur totam magnam distinctio, ab facere vitae quia blanditiis, cum autem maxime." }
  ]

  const elementosLista = ["Inicio", "Nosotros", "Contacta", "Proyectos", "Clientes"]

  const redes = [
    { nombre: "facebook", clase: "fa fa-facebook", enlace: ""},
    { nombre: "twitter", clase: "fa fa-twitter", enlace: ""},
    { nombre: "instagram", clase: "fa fa-instagram", enlace: ""},
    { nombre: "gmail", clase: "fa fa-envelope", enlace: ""}
  ]

  return (
    <>
      <header>
        <h1>Prueba Diweb</h1>
        <Menu
          titulo="Menú"
          elementosLi={elementosLista}
        ></Menu>
      </header>
      <main>
        <section>
          <article>
            {parajes.map((paraje, i) =>
              <Paraje
                key={`paraje${i}`}
                claseDiv={paraje.claseDiv}
                src={paraje.src}
                alt={paraje.alt}
                claseP={paraje.claseP}
                contenidoP={paraje.contenidoP}
                contenidoH3={paraje.contenidoH3}
                claseInfo={paraje.claseInfo}
                contenidoInfo={paraje.contenidoInfo}
              ></Paraje>
            )}
          </article>

          <article>
            <h2>Nuestros Bosques</h2>
          </article>

          <article>
            <p>Nuestra Galeria de Fotos</p>
            <h2>Paisajes Made in Spain</h2>
            <div className="galeria">
              <img src={foto6} alt="" />
              <img src={foto7} alt="" />
              <img src={foto8} alt="" />
              <img src={foto11} alt="" />
            </div>
          </article>

        </section>
      </main>
      <Footer
        subTitulo="IES ORETANIA-DIWEB - 17 de marzo 2022"
        redes={redes}
      ></Footer>
    </>
  )
}

export default App
