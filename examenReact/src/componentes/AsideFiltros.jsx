export function AsideFiltros(props) {
  return (
    <aside className={props.claseAside}>
      <div className={props.claseAsideDiv}>
        <h3 className={props.claseTitulo}>{props.titulo}</h3>
        <div className={props.claseSectionDiv}>
          {props.categorias.map((categoria) =>
              <div className="item" key={categoria}>
              <span className="item-content">{categoria}</span>
              <i className="fa fa-close delete-filter js-delete-filter" onClick={props.onClick}></i>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
