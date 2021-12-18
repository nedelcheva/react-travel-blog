import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore"
import { Link } from 'react-router-dom'



export default function Category() {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")
    

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])

    const pageURL = window.location.href.split('/')
    const currentURL = pageURL[4]
    console.log(pageURL[4])

    console.log(posts)
    const cat = posts.filter((p) => p.category === currentURL)
    console.log(cat.length)

    return (
        <div className="all-posts">
        { cat.length > 0 ?
            cat.map((post) => {
                
                return (
                    <li key={post.id} >
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
            :  (<h1 >No posts from this category</h1>)
        }

    </div>
    )
}
