import '../CSS/Footer.css';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Footer (): JSX.Element {
    // * this variable "path" is for deploy
    const path: string = '/sample-KT';
    const navList: string[] = ["Home", "Our Services", "About Us", "Contact"];
    return(
        <footer className='footer-container'>
            <div>
                <Link to={path} className='ken-trading-icon' onClick={ScrollToTop}>
                    <h3>Ken Trading</h3>
                    <p>~since 1984~</p>
                </Link>
            </div>
            <ul className="footer-items">
            {navList.map((item)=> {
                return(
                <li key={item} className="footer-item"><Link to={`${item === 'Home' ? path : path + '/' + item.toLowerCase().replace(" ", "-")}`}  onClick={ScrollToTop}>{item}</Link></li>
                )
            })}
            </ul>
        </footer>
    )
}

export default Footer;