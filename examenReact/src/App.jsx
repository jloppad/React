import { useState, useEffect } from 'react'
import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'
import { AsideFiltros } from './componentes/AsideFiltros.jsx'
import { Articulos } from './componentes/Articulos.jsx'


function App() {

  const [categorias, setCategorias] = useState([]);
  const [articulos, setArticulos] = useState([]);

  const redes = [
    { nombre: "facebook", claseLink: "social-link", clase: "fa fa-facebook", enlace: "#" },
    { nombre: "twitter", claseLink: "social-link", clase: "fa fa-twitter", enlace: "#" },
    { nombre: "instagram", claseLink: "social-link", clase: "fa fa-instagram", enlace: "#" }
  ]

  const urlCategorias = `https://fakestoreapi.com/products/categories`;

  useEffect(() => {
    fetch(urlCategorias)
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      })
  });

  const cambiarCheck = (e) => {
    if (e.target.className.includes("close")) {
      e.target.className = "fa fa-check delete-filter js-delete-filter"
    } else {
      e.target.className = "fa fa-close delete-filter js-delete-filter"
    }

    let nombre = e.target.previousSibling.textContent;

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${nombre}`)
        .then((datos) => datos.json())
        .then((lectura) => {
          setArticulos(
            [lectura.title,
            lectura.price,
            lectura.image
            ]);
        })
    });

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
