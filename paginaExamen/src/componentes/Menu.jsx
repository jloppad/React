export function Menu(props) {
    return (
        <div>
          <p>{props.titulo}</p>
          <input type="checkbox" id="check" />
          <label id="menu" htmlFor="check">
            <span id="abrir">&#9776;</span>
            <span id="cerrar">&#215;</span>
          </label>
          <nav id="nav">
            <ul>
                {props.elementosLi.map( (li, i) =>
                    <li key={`Elemento${i}`}>{li}</li>
                )}
            </ul>
          </nav>
        </div>
    )
}
