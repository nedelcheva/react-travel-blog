import React from 'react'
import './allArticlesPage.css'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/Sidebar/Sidebar'


export default function AllArticlesPage() {
    return (
        <div className="all-p">
            <Post/>
            <Sidebar/>
        </div>
    )
}
