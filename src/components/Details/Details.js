import React from 'react'
import './details.css'
import { db } from '../../firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { useParams } from 'react-router-dom'

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

    console.log(posts)
    let { id } = useParams();
    const currentPost = posts.filter((p) => p.id === id)
    

    return (
        <div className="details">
            {
                currentPost.map((c) => {
                    return (
                        <li key={c.id}>
                            <div className="details">
                                <img className="details-img" src={c.photo} alt="" />
                                <div className="details-title">{c.title}</div>
                                <div className="details-wrapper">
                                    <div className="details-author">Author: Velimira Nedelcheva</div>
                                    <div className="details-date">{c.date}</div>
                                </div>
                                <div className="details-description">{c.article}</div>

                            </div>
                        </li>
                    )
                })
            }

        </div>
    )
}
