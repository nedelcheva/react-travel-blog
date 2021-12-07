import React from 'react'
import './post.css'
import { db } from '../../firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'


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

    let { id } = useParams();
    const currentPost = posts.find(el => el.id === id)
    console.log(currentPost)

    return (
        <div className="all-posts">
            {
                posts.map((post) => {
                    return (
                        <div className="post">
                            <img className="post-img" src={post.photo} alt="photo"/>
                            <div className="post-title" >{post.title}</div>
                            <div className="post-wrapper">
                                <div className="post-category" >{post.category}</div>
                                <div className="post-date">{post.date}</div>
                            </div>
                            <div className="post-description">{post.article}</div>
                            
                            <Link className="link" to={`/details/${currentPost}`}>HOME</Link>
                        </div>
                    )
                })
            }

        </div>

    )
}
