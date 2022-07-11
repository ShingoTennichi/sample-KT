import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';
import { useState } from 'react';


function NavBar(): JSX.Element  {
    // * this variable "path" is for deploy
    const path: string = '/sample-KT';
    const navList: string[] = ["Home", "Our Services", "About Us", "Contact"];
    const [navState, setNavState] = useState(false);
    return(
        <nav className="navbar-container">
            <div>
                <Link to='/' className='ken-trading-icon'>
                    <h3>Ken Trading</h3>
                    <p>~since 1984~</p>
                </Link>
            </div>
            <div>
                <ul className='nav-items'>
                {navList.map((item)=> {
                    return(
                        <li key={item} ><Link to={`${item === 'Home' ? path : path + '/' + item.toLowerCase().replace(" ", "-")}`} className="nav-item">{item}</Link></li>
                    )
                })}
                </ul>
                <button className='nav-btn' onClick={()=>setNavState(!navState)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className={navState ? 'hidden-nav-menu' : 'hidden-nav-menu hide'} onClick={()=> setNavState(!navState)}>
                {navList.map((item)=> {
                    return(
                        <li key={item}><Link to={`${item === 'Home' ? path : path + '/' + item.toLowerCase().replace(" ", "-")}`} className="nav-item">{item}</Link></li>
                    )
                })}
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;