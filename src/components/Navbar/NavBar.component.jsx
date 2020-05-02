import React from 'react';
import Logo from './../../assets/img/logo.jpg'

const NavBar = () => {
    return (
        <nav className="nav">
            <img src={Logo} alt="posten" className="logo" />
            <div className="circle">
                <i class="fas fa-bars fa-lg"></i>
            </div>
        </nav>
    );
}

export default NavBar;