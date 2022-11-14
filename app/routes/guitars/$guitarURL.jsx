import { getGuitar } from '~/models/guitars.server'
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/guitars.css'
import { useState, useRef } from 'react'
import { useOutletContext } from '@remix-run/react'

export async function loader({params}){
    const {guitarURL: guitar__url} = params;
    const {data: guitar} = await getGuitar(guitar__url);

    if (!guitar.length === 0){
        throw new Response("Not Found", {
            status: 404,
          });
    } else {
        return guitar;
    }
}

export function meta({data}){
    if (data.length === 0){
        return{
            title: `GuitarLA - 404`
        }    
    } else {
        return{
            title: `GuitarLA - ${data[0].attributes.name}`
        }
    }
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

const GuitarURL = () => {

    const {addToCart} = useOutletContext();

    const guitar = useLoaderData();
    const {name, price, description} = guitar[0].attributes;
    const imageURL = guitar[0].attributes.image.data.attributes.formats.medium.url;
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if(quantity === 0){
            setError('You need to select at least one guitar to proceed');
            return
        }

        const productToAdd = {
            id: guitar[0].id,
            name,
            price,
            imageURL,
            quantity
        }

        addToCart(productToAdd);
        //useLocalStorage(productToAdd);
    }

    return(
        <div className='container singleGuitar guitar'>
            <div className='singleGuitar__content'>
                <h1 className="guitar__name">{name}</h1>
                <p className="guitar__desc">{description}</p>
                <p className="guitar__price">${price}</p>

                <form className='singleGuitar__form' onSubmit={handleSubmit}>
                    <label htmlFor='quantity'>Quantity</label>

                    <select id='quantity' onChange={ e => setQuantity(parseInt(e.target.value))}>
                        <option value=""> Select </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value="Add to Cart"/>
                    {error && <p>{error}</p>}
                </form>
            </div>
            <figure className="guitar__figure">
                <img 
                    src={imageURL}
                    className="guitar__image"
                    alt={`${name} guitar`}
                />
            </figure>
        </div>
    )
}

export default GuitarURL