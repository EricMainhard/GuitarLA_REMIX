import { Navigation } from './Navigation'

export function Footer(){
    return(
        <footer className='footer'>
            <div className="footer__content">
                <Navigation/>
                <p className="footer__copyright">
                    All rights reserved - {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}