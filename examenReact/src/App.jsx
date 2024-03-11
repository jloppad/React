import { useState, useEffect } from 'react'
import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'
import { AsideFiltros } from './componentes/AsideFiltros.jsx'
import { Articulos } from './componentes/Articulos.jsx'


function App() {

  const [categorias, setCategorias] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [categoriasUsada, setCategoriasUsada] = useState([]);
  const [categoria, setCategoria] = useState();

  const redes = [
    { nombre: "facebook", claseLink: "social-link", clase: "fa fa-facebook", enlace: "#" },
    { nombre: "twitter", claseLink: "social-link", clase: "fa fa-twitter", enlace: "#" },
    { nombre: "instagram", claseLink: "social-link", clase: "fa fa-instagram", enlace: "#" }
  ]

  const urlCategorias = `https://fakestoreapi.com/products/categories`;
  const urlArticulos = `https://fakestoreapi.com/products/category/${categoria}`;


  useEffect(() => {
    fetch(urlCategorias)
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      })
  }, [categorias]);

  useEffect(() => {
    fetch(urlArticulos)
      .then((response) => response.json())
      .then((data) => {
        actualizarArticulos(data)
      })
  }, [categoria]);

  const actualizarArticulos = (datos) => {
    if (!categoriasUsada.includes(categoria)) {
      setArticulos((prevArticulos) => [...prevArticulos, ...datos]);
      setCategoriasUsada((prevCategoriasUsada) => [...prevCategoriasUsada, categoria]);
    } else {
      const nuevosArticulos = articulos.filter((articulo) => !datos.find((item) => item.id === articulo.id));
      setArticulos(nuevosArticulos);
      const nuevasCategoriasUsada = categoriasUsada.filter((cat) => cat !== categoria);
      setCategoriasUsada(nuevasCategoriasUsada);
    }
  };
  
  

  const cambiarCheck = (e) => {
    if (e.target.className.includes("close")) {
      e.target.className = "fa fa-check delete-filter js-delete-filter"
    } else {
      e.target.className = "fa fa-close delete-filter js-delete-filter"
    }

    setCategoria(e.target.previousSibling.textContent);

  };


  return (

    <main className="main-wrapper">
      <Header
        claseHeader="page-header"
        claseTitulo="page-title"
        titulo="Tienda de Prueba Ajax"
      ></Header>



      <div className="page-wrapper">

        <AsideFiltros
          claseAside="aside-wrapper"
          claseAsideDiv="aside-section"
          claseTitulo="section-title"
          titulo="Filtros"
          claseSectionDiv="section-content"
          categorias={categorias}
          onClick={cambiarCheck}
        ></AsideFiltros>

        <Articulos
          claseContenido="content-wrapper"
          claseTitulo="section-title"
          titulo="Artículos"
          claseDiv="grid-container"
          idDiv="grid-container"
          articulos={articulos}
        ></Articulos>

      </div>

      <Footer
        claseFooter="page-footer"
        claseDiv="footer-content-wrapper"
        claseSpan="advise"
        contenidoSpan="Gracias a codepen por su html y css. Pueden utilizar flex-wrap para hacer la grilla de macbooks, y min-width para hacer el tamaño flexible. Esto es un footer, además."
        claseTitulo="page-logo"
        contenidoTitulo="Prueba Ajax IES Oretania (21 de febrero)"
        claseRedes="social"
        redes={redes}
      ></Footer>

    </main>
  )
}

export default App
