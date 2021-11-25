import React, {useEffect, useState} from 'react'
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
                <img className="navbar-left-logo" src={require('../../images/logo-navbar.png').default} alt="Logo Image"/>
                <ul className="navbar-left-menu">
                    <li className="navbar-left-menu-items">HOME</li>
                    <li className="navbar-left-menu-items">ALL ARTICLES</li>
                    <li className="navbar-left-menu-items">FAMOUS ARTICLES</li>
                    <li className="navbar-left-menu-items">CATEGORIES</li>
                    <li className="navbar-left-menu-items">CONTACTS</li>
                </ul>
            </div>
            <div className="navbar-right">
                
                    <button className="navbar-right-button">LOGIN</button>
                    <button className="navbar-right-button">REGISTER</button>
                
            </div>
        </div>
    )
}
