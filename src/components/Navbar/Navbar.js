import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const [error, setError] = useState("")
    const {currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        
        setError('')

        try {
             await logout()
             console.log('out')
             navigate('/')
         } catch {
             console.log('error')
             setError('Failed to log out')
         }
    }


    return (
        <div className="navbar">
            <div className="navbar-left">
                <img className="navbar-left-logo" src={require('../../images/logo-navbar.png').default} alt="Logo Image" />
                <ul className="navbar-left-menu">
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/all">ALL ARTICLES</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/add"
                        style={{ display: currentUser ? "" : "none"}}
                        >ADD A POST</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/favourite"
                        style={{ display: currentUser ? "" : "none"}}
                        >MY FAVOURITES</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/contact"
                        style={{ display: currentUser ? "" : "none"}}
                        >CONTACTS</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">

                <button className="navbar-right-button">
                <Link className="link" to="/signup"
                style={{ display: !currentUser ? "" : "none"}}
                >LOGIN</Link>
                </button>
                <button className="navbar-right-button">
                <Link className="link" to="/register"
                style={{ display: !currentUser ? "" : "none"}}
                >REGISTER</Link>
                </button>
                <button className="navbar-right-button" onClick={handleLogout}
                style={{ display: !currentUser ? "none" : ""}}
                >LOGOUT</button>

            </div>
        </div>
    )
}
