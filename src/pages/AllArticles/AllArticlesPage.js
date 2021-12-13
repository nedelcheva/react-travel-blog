import React from 'react'
import './allArticlesPage.css'
import HomePosts from '../../components/HomePosts/HomePosts'
import Sidebar from '../../components/Sidebar/Sidebar'


export default function AllArticlesPage() {
    return (
        <div className="all-p">
            <HomePosts/>
            <Sidebar/>
        </div>
    )
}
