
import { Link } from 'react-router-dom';
import './Header.css'
import React from 'react'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">The Movie Store</h1>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">Contact</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/services" className="navbar-link">Services</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;