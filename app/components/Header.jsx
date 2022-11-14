import { Link } from '@remix-run/react'
import { Navigation } from './Navigation'
import logo from '../../public/img/logo.svg'

export function Header(){
  return (
    <header className='header'>
        <div className="container header__container">
            <Link to="/">
                <img className="logo" src={logo} alt="GuitarLA"/>
            </Link>
            <Navigation/>
        </div>        
    </header>
  )
}
