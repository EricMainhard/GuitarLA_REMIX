import { Link } from "@remix-run/react";

export function GuitarItem({...guitar}){

    const {description: desc, image, name, price, url} = guitar.attributes;
    const {formats, alternativeText} = image.data.attributes;

    return(
        <div className="guitar">
            <div className="guitar__content">
                <h2 className="guitar__name">{name}</h2>
                <p className="guitar__desc">{desc}</p>
                <p className="guitar__price">${price}</p>
                <button className="guitar__button button">
                    <Link to={`/guitars/${url}`}>
                        See product
                    </Link>
                </button>
            </div>
            <figure className="guitar__figure">
                <img 
                    src={formats.medium.url} 
                    className="guitar__image"
                    alt={alternativeText}/>
            </figure>
        </div>
    )
}