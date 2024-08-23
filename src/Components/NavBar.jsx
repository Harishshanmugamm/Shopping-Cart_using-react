import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [click, setClick] = useState(false)
    return (
        <div className='header'>
            <div className="heading">
                <h1>Habibi Carts</h1>
            </div>
            <div className="icons">
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setClick(!click)}></i>
            </div>

            <ul className={click ? "menu-items active" : "menu-items"}>
                <Link to="/" className='lik'>Home</Link>
                <Link to="/cart" className='lik'>Cart</Link>
            </ul>

        </div>
    )
}

export default NavBar