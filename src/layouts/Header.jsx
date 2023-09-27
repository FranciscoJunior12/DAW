
import { Link } from 'react-router-dom';
import './Header.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/EstadoGlobal';

const Header = () => {

    const { perfil } = useContext(ThemeContext);


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">The Virtual Library</h1>
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
                    <li className="navbar-item">
                        <Link
                            to={perfil === 'Admin' ? '/admin' : '/user'}
                            className="navbar-link">Library
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login" className="navbar-link">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;