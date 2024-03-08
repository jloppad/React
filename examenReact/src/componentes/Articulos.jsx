export function Articulos(props) {
    return (
        <div className={props.claseContenido}>
            <h3 className={props.claseTitulo}>{props.titulo}</h3>
            <div className={props.claseDiv} id={props.idDiv}>
                {props.articulos.map((articulo) =>
                    <div class="item">
                        <a href="#" class="item-content-wrapper">
                            <div class="item-image-wrapper">
                                <div class="heart js-heart">
                                    <i
                                        class="fa fa-heart-o js-heart-icon"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                                <img
                                    src={articulo.image}
                                    loading="lazy"
                                    alt="Just a macbook"
                                />
                            </div>

                            <div class="item-description-wrapper">
                                <div class="item-name">{articulo.title}</div>
                                <div class="item-price">${articulo.price}</div>
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}