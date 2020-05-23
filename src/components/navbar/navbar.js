import React from 'react';
import styles from './navbar.module.css'
import logo from '../../images/clo.png'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (   <div className={styles.sidenav}>
        <img src={logo} alt="" className={styles.logo} />
        <Link to="/">Global</Link>
        <Link to="/india">India</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        </div>);
}
 
export default Navbar;