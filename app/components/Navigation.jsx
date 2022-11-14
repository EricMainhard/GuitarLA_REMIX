import { Link, useLocation } from '@remix-run/react'
import cartImage from '../../public/img/cart.png'

export function Navigation(){

    const location = useLocation();

    return(
        <div className="navigation">
            <nav className="nav">
                <Link to="/" className={`${location.pathname == ('/') && 'active'}`}
                > Home </Link>
                <Link to="/us" className={`${location.pathname == ('/us') && 'active'}`}
                > Us </Link>
                <Link to="/store" className={`${location.pathname == ('/store') && 'active'}`}
                > Store </Link>
                <Link to="/blog" className={`${location.pathname == ('/blog') && 'active'}`}
                > Blog </Link>
                <Link to="/cart" className={`${location.pathname == ('/cart') && 'active'}`}>
                    <img src={cartImage}/>
                </Link>
            </nav>
        </div>
    )
}