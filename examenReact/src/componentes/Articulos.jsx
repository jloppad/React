export function Articulos(props) {
    return (
        <div className={props.claseContenido}>
            <h3 className={props.claseTitulo}>{props.titulo}</h3>
            <div className={props.claseDiv} id={props.idDiv}>
                {props.articulos.map((articulo) =>
                    <div key={articulo.title} className="item">
                        <a href="#" className="item-content-wrapper">
                            <div className="item-image-wrapper">
                                <div className="heart js-heart">
                                    <i
                                        className="fa fa-heart-o js-heart-icon"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                                <img
                                    src={articulo.image}
                                    loading="lazy"
                                    alt="Just a macbook"
                                />
                            </div>

                            <div className="item-description-wrapper">
                                <div className="item-name">{articulo.title}</div>
                                <div className="item-price">${articulo.price}</div>
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}