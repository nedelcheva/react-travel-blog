import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';


export default function Navbar() {
    // const [button, setButton] = useState(true);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else{
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);


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
                        <Link className="link" to="/add">ADD A POST</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/favourite">MY FAVOURITES</Link>
                    </li>
                    <li className="navbar-left-menu-items">
                        <Link className="link" to="/contact">CONTACTS</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">

                <button className="navbar-right-button">LOGIN</button>
                <button className="navbar-right-button">REGISTER</button>

            </div>
        </div>
    )
}
