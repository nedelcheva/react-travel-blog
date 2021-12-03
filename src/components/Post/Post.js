import React from 'react'
import './post.css'
import { db } from '../../firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"


export default function Post() {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])


    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <div className="post">
                            <img className="post-img" src={require('../../images/mexico.jpg').default} />
                            <div className="post-title" >{post.title}</div>
                            <div className="post-wrapper">
                                <div className="post-category" >{post.category}</div>
                                <div className="post-date">{post.date}</div>
                            </div>
                            <div className="post-description">{post.article}</div>
                        </div>
                    )
                })
            }

        </div>

    )
}
