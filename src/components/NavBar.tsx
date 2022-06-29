import '../CSS/NavBar.css';
import { useState } from 'react';

function NavBar(): JSX.Element  {
    const navList: string[] = ["Home", "Our Services", "About Us", "Contact"];
    const [navState, setNavState] = useState(false);
    return(
        <nav className="navbar-container">
            <div>
                <h3>Ken Trading</h3>
                <p>~since 1984~</p>
            </div>
            <div>
                <ul className='nav-items'>
                {navList.map((item)=> {
                    return(
                    <li key={item} className="nav-item">{item}</li>
                    )
                })}
                </ul>
                <button className='nav-btn' onClick={()=>setNavState(!navState)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                { navState ?
                <ul className='hidden-nav-menu' onClick={()=> setNavState(!navState)}>
                {navList.map((item)=> {
                    return(
                    <li key={item} className="nav-item">{item}</li>
                    )
                })}
                </ul>: <></>
                }
            </div>
        </nav>
    )
};

export default NavBar;