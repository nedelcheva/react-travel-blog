import React from 'react'
import './post.css'
import { db } from '../../firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { Link } from 'react-router-dom';



export default function Post(props) {
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
    return (
        <div className="all-posts">
            {
                posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <div className="post">
                                <img className="post-img" src={post.photo} alt="photo" />
                                <div className="post-title" >{post.title}</div>
                                <div className="post-wrapper">
                                    <div className="post-category" >{post.category}</div>
                                    <div className="post-date">{post.date}</div>
                                </div>
                                <div className="post-description">{post.article}</div>

                                <Link className="link home-d" to={`/post/${post.id}`}>DETAILS</Link>
                            </div>
                        </li>
                    )
                })
            }

        </div>

    )
}
