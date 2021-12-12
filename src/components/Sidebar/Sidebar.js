import React from 'react'
import './sidebar.css'

const Sidebar = (props) => {
    return (
        <div>
            <div className="sidebar" {...props}>
                <div className="categories">
                    <h1 className="categories-title">CATEGORIES</h1>

                    <ul className="categories-list">
                        <div className="categories-wrapper">
                            <li className="categories-list-items">Europe</li>
                            <li className="categories-list-items">Africa</li>
                        </div>
                        <div className="categories-wrapper">
                            <li className="categories-list-items">North America</li>
                            <li className="categories-list-items">South America</li>
                        </div>
                        <div className="categories-wrapper">
                            <li className="categories-list-items">Asia</li>
                            <li className="categories-list-items">Australia</li>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Sidebar