import React from 'react'
import './detailsPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Details from '../../components/Details/Details'
import { useParams } from 'react-router'


export default function DetailsPage() {
    let {id} = useParams();
    return (
        <div className="detailsPage">
            <Details/>
            <Sidebar/>
        </div>
    )
}
