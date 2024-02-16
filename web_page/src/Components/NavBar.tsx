import { useState } from 'react';
// import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg';
import Hamburger from '../assets/icons/hamburgerIcon.svg';
import './NavBar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='navbar'>
      <div className='navbarContainer'>
        <div className='logo'>{/* <Brand /> */}LOGO</div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <img className='hamburger' src={Hamburger} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/#cars'>Blog</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
