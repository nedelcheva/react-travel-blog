import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div>
            <div className="sidebar" {...props}>
                <div className="categories">
                    <h1 className="categories-title">CATEGORIES</h1>

                    <ul className="categories-list">
                        <div className="categories-wrapper">
                        <Link className="link categories-list-items" to={`/all/${"europe"}`}>Europe</Link>
                        <Link className="link categories-list-items" to={`/all/${"africa"}`}>Africa</Link>
                        </div>
                        <div className="categories-wrapper">
                        <Link className="link categories-list-items" to={`/all/${"north"}`}>North America</Link>
                        <Link className="link categories-list-items" to={`/all/${"south"}`}>South America</Link>
                        </div>
                        <div className="categories-wrapper">
                        <Link className="link categories-list-items" to={`/all/${"asia"}`}>Asia</Link>
                        <Link className="link categories-list-items" to={`/all/${"australia"}`}>Australia</Link>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Sidebar