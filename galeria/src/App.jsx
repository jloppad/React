import {Imagen} from './componentes/Imagen.jsx'
import './App.css'
import img1 from "./recursos/1.jpg";
import img2 from "./recursos/2.jpg";
import img3 from "./recursos/3.jpg";
import img4 from "./recursos/4.jpg";
import img5 from "./recursos/5.jpg";
import img6 from "./recursos/6.jpg";

function App() {

  return (
    <>
      <div class="contenedor">
          <Imagen
            agua="true"
            src={img1}
            alt="foto1"
            desc="Foto 1"
          ></Imagen>
          <Imagen
            agua="false"
            src={img2}
            alt="foto2"
            desc="Foto 2"
          ></Imagen>
          <Imagen
            agua="true"
            src={img3}
            alt="foto3"
            desc="Foto 3"
          ></Imagen>
          <Imagen
            agua="false"
            src={img4}
            alt="foto4"
            desc="Foto 4"
          ></Imagen>
          <Imagen
            agua="true"
            src={img5}
            alt="foto5"
            desc="Foto 5"
          ></Imagen>
          <Imagen
            agua="false"
            src={img6}
            alt="foto6"
            desc="Foto 6"
          ></Imagen>
      </div>
    </>
  )
}

export default App
