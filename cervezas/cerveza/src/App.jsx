import { Articulo } from './Articulo'
import style from './Articulo.module.css'
import img1 from "./img/foto1.jpg";
import img2 from "./img/cerveza_gredos_intro1.jpg";
import img3 from "./img/nuestra_fabrica1.jpg";

function App() {
  return (
      <main>
        <h1>La Primera Cerveza Artesana y Natural de la Sierra de Gredos</h1>
        <div className={style.contenedor}>
          <Articulo
            img={img1}
            comentario="Ahora puedes disfrutar de todo el sabro y propiedades de la mejor Cerveza Artesanal comprando desde tu Casa."
          >
          </Articulo>
          <Articulo
            img={img2}
            comentario="Descubre Nuestra Cerveza, elaborada con la mejor malta y lupulos cuidadosamente seleccionados."
          >
          </Articulo>
          <Articulo
            img={img3}
            comentario="En nuestra fábrica elaboramos la cerveza artesana Gredos, siguiendo el método tradicional artesano de nuestros abuelos."
          >
          </Articulo>
          <button>VISÍTANOS</button>
        </div>
      </main>
  )
}

export default App
