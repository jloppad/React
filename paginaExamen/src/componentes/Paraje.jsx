export function Paraje(props) {
    return (
        <div className={props.claseDiv}>
            <img src={props.src} alt={props.alt} />
            <p className={props.claseP}>{props.contenidoP}</p>
            <h3>{props.contenidoH3}</h3>
            <p className={props.claseInfo}>{props.contenidoInfo}</p>
        </div>
    )
}
