export function Articulo(props) {
    return (
        <article>
            {/* <img src={require(`./img/${props.img}`)} alt="foto1" /> */}
            <img src={props.img} alt="imagen" />
            <p>
                {props.comentario}
            </p>
        </article>
    )
}