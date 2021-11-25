import React from 'react'
import './detailsPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Details from '../../components/Details/Details'


export default function DetailsPage() {
    return (
        <div className="detailsPage">
            <Details/>
            <Sidebar/>
        </div>
    )
}
