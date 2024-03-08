export function Header(props) {
  return (
    <header className={props.claseHeader}>
        <h1 className={props.claseTitulo}>{props.titulo}</h1>
    </header>
  )
}
