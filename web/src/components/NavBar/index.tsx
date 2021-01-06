import { Link } from 'react-router-dom';

import './styles.css';

import {ReactComponent as Logo} from '../../assets/logo.svg';

const NavBar: React.FC = () => {
  return (
    <nav className="main-navBar">
      <Logo />
      <a href="home" className="logo-text">DS Delivery.</a>
    </nav>
  );
}

export default NavBar;