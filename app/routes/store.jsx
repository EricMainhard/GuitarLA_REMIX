import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import { GuitarItem } from '~/components/GuitarItem'
import styles from '~/styles/guitars.css'

export function meta(){
  return{
    title: 'GuitarLA - Store',
    description: "GuitarLA - Our Guitars Collection"
  }
}

export function links(){
  return [
    {
    rel: 'stylesheet',
    href: styles
    }
  ]
}

export async function loader(){
  const guitars = getGuitars();
  return guitars;
}

const Store = () => {
    
    const {data} = useLoaderData();
    return (
      <div className="container">
          <h1 className="heading">
            Our Collection
          </h1>
          {
            data.length && (
              <div className='guitars__grid'>
                {data.map( guitar => (
                  <GuitarItem key={guitar.id} {...guitar}/>
                ))}
              </div>
            )
          }
      </div>
    )
  }
  
  export default Store