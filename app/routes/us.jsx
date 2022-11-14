import usImage from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'

export function meta(){
  return{
    title: 'GuitarLA - About Us'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: usImage,
      as: 'image'
    }
  ]
}

const Us = () => {  
    return (
      <main className="us container">
          <h2 className="us__heading">
            US
          </h2>
          <div className="us__content">
            <img src={usImage} className="us__image"/>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam omnis exercitationem cum ipsum laudantium explicabo accusantium sunt ipsa temporibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam omnis exercitationem cum ipsum laudantium explicabo accusantium sunt ipsa temporibus.</p>
            </div>
          </div>
      </main>
    )
}
  
  export default Us