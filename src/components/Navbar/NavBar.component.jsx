import React from 'react';
import Logo from './../../assets/img/logo.jpg'

const NavBar = () => {
    return (
        <nav className="nav">
            <img src={Logo} alt="posten" className="logo" />
            <div className="circle">
                <i className="fas fa-bars fa-2x"></i>
            </div>
        </nav>
    );
}

export default NavBar;
