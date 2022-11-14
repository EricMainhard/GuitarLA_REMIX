import { useEffect, useState } from 'react'

import {
    Meta,
    Links,
    Outlet,
    Scripts,
    Link,
    useCatch,
    LiveReload
} from '@remix-run/react'
import styles from '~/styles/index.css'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'

export default function App(){

    const cartLS = typeof window !== 'undefined' ?
        JSON.parse(localStorage.getItem('cart')) ?? [] : null;
    const [cart, setCart ] = useState(cartLS);

    const addToCart = (gtr) => {
        if (cart.some( gtrInCart => gtrInCart.id === gtr.id )){
            const updateCart = cart.map( gtrState => {
                if ( gtrState.id === gtr.id ){
                    gtrState.quantity = gtr.quantity
                }
                return gtrState;
            });
            setCart(updateCart);
        } else {
            setCart([...cart, gtr]);
        }
    }

    const updateQuantity = (id, quantity) => {
        const updateCart = cart.map( gtrState => {
            if ( gtrState.id === id ){
                gtrState.quantity = quantity
            }
            return gtrState;
        });
        setCart(updateCart);
    }

    const deleteItem = (id) => {
        const newCart = cart.filter(gtr => gtr.id !== id);
        setCart(newCart);
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

    return (
        <Document>
            <Outlet
                context={{
                    cart,
                    addToCart,
                    updateQuantity,
                    deleteItem
                }}    
            />
        </Document>
    )
}

export function meta(){
    return(
        {
            charset: "UTF-8",
            title: "GuitarLA - Remix",
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossOrigin: 'true'
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        }
    ]
}

function Document({children}){

    return(
        <html lang="en">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

export function CatchBoundary(){
    const error = useCatch();
    return (
        <Document>
            <p className='notFound'>
                {error.status} {error.statusText}
            </p>
            <Link to="/">Back to home</Link>
        </Document>        
    );
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='notFound'>
                {error.status} {error.statusText}
            </p>
            <Link to="/">Back to home</Link>
        </Document>      
    )
}