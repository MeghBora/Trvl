import React from 'react';
import {useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton ] = useState(true);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu =() => setClick(false);
    const showButton =() => {
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
          <div className='navbar-container'>
             <Link to= '/' className = "navbar-logo" onClick={closeMobileMenu} >
                TRVL <i className="fab fa-typo3"></i>
             </Link>
             <div className="menu-icon" onClick = {handleClick}>
                 <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
             </div>
             <ul className={click? 'nav-menu active':'nav-menu'}>
                 <li className='nav-items'>
                     <Link to='/' className='nav-link' onClick = {closeMobileMenu}>
                         HOME
                     </Link>
                 </li>

                 <li className='nav-items'>
                     <Link to='/services' className='nav-link' onClick = {closeMobileMenu}>
                         SERVICES
                     </Link>
                 </li>
                 <li className='nav-items'>
                     <Link to='/products' className='nav-link' onClick = {closeMobileMenu}>
                         PRODUCTS
                     </Link>
                 </li>
                 <li className='nav-items'>
                     <Link to='/sign-up' className='nav-link-mobile' onClick = {closeMobileMenu}>
                         Sign Up
                     </Link>
                 </li>
             </ul>
             {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>}
          </div>
    </nav>
    </>
  );
}

export default Navbar;
