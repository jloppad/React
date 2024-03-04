export function Footer(props) {
  return (
    <footer>
      <ul>
        {props.redes.map((red) =>
          <li key={red.nombre}><a href={red.enlace}><i className={red.clase}></i></a></li>
        )}
      </ul>
      <p>{props.subTitulo}</p>
    </footer>
  )
}
