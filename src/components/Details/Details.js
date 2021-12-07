import React from 'react'
import './details.css'
import { db } from '../../firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { useParams } from 'react-router'

export default function Details() {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])

    let { id } = useParams();
    const currentPost = posts.find(el => el.id === id)
    console.log(currentPost)

    return (
        <div className="details">
            <img className="details-img" src={currentPost.photo}/>
            <div className="details-title">{currentPost.title}</div>
            <div className="details-wrapper">
               <div className="details-author">Author: Velimira Nedelcheva</div>
            <div className="details-date">{currentPost.date}</div> 
            </div>
            <div className="details-description">{currentPost.article}</div>
            
        </div>
    )
}
