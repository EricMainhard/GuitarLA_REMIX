import styles from '~/styles/cart.css'
import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils'

export async function loader(){
    return {}
  }
  
  export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

export default function Cart(){

    const {cart, updateQuantity, deleteItem} = useOutletContext();
    const [total, setTotal] = useState(0);

    useEffect(()=>{
      const totalPrice = cart.reduce( (total, item) => total += (item.quantity * item.price), 0);
      setTotal(totalPrice);
      
    },[cart])

    return(
      <ClientOnly fallback={'Loading...'}>
        {()=>(
        <main className="container cart">
            <h1 className="heading">
              Your Cart
            </h1>
            <div className="cart__content">
              <div className="cart__articles">
                <h2>Articles</h2>
                {cart?.length > 0 ? 
                (
                    cart?.map( item => (
                      <div key={item.id} className="cart__item">
                        <figure>
                          <img src={item.imageURL}/>
                        </figure>
                        <div>
                          <h3>{item.name}</h3>
                          <p>Quantity:</p>
                          <select 
                            value={item.quantity} 
                            className="cart__quantity"
                            onChange={(e)=>{updateQuantity(item.id, e.target.value)}}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <p>Price: ${item.price}</p>
                          <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                        <button 
                          className="cart__delete"
                          onClick={()=>{deleteItem(item.id)}}>
                          X
                        </button>
                      </div>
                    ))
                ) : 
                (
                  <p>No items in cart yet</p>
                )
                }
              </div>
              <aside className="cart__resume">
                  <h3>Order resume</h3>
                  {cart?.length > 0 ?
                    (
                        cart?.map( item => (
                          <p key={item.id} className="resume__item">
                            <span>{item.name}</span> 
                            x
                            <span>{item.quantity}</span>
                          </p>
                        ))
                    ) : null
                  }
                  <p>Total: ${total}</p>
              </aside>
            </div>
        </main>
        )}
      </ClientOnly>
    )
}