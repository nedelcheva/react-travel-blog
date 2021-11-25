import React from 'react'
import HomePosts from '../../components/HomePosts/HomePosts'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <HomePosts/>
            <Sidebar/>
        </div>
        </>
    )
}
