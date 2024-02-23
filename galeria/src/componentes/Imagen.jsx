
export function Imagen(props) {
    return (
        <>
            <div className={props.agua == true ? "agua" : "fuego"}>
                <img src={props.src} alt={props.alt} />
                <p>{props.desc}</p>
            </div>
        </>
    )
}