export function Footer(props) {
  return (
    <footer className={props.claseFooter}>
      <div className={props.claseDiv}>
        <span className={props.claseSpan}>
          {props.contenidoSpan}
        </span>
        <h3 className={props.claseTitulo}>{props.contenidoTitulo}</h3>
        <div className={props.claseRedes}>

          {props.redes.map((red) =>
            <a key={red.nombre} href={red.enlace} className={red.claseLink}>
              <i className={red.clase}></i>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}