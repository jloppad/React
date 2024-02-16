// import img from "./img/foto1.png";

export function Comentario(props) {
    return (
        <div className={styles.comentario} class="comentario">
            {/* <img src={require(`./img/${props.img}`)} alt="foto1" />  */}
            {/* <img src={img} alt="foto" /> */}
            <div class="contenido_comentario">
                <p><strong>{props.nombre}</strong> in {props.pais}</p>
                <p>{props.trabajo} at <strong>{props.empresa}</strong></p>
                <p>"{props.comenta}"</p>
            </div>
        </div>
    )
}