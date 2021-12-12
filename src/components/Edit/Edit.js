import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import './edit.css'
import { db } from '../../firebase'
import { collection, getDocs, doc, updateDoc } from "firebase/firestore"

export default function AddPost() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [article, setArticle] = useState("")
    const [photo, setPhoto] = useState("")
    const navigate = useNavigate()

    const postsCollectionRef = collection(db, "posts")

    const changeTitle = (e) => { setTitle(e.target.value) }
    const changeCategory = (e) => { setCategory(e.target.value) }
    const changeDate = (e) => { setDate(e.target.value) }
    const changeArticle = (e) => { setArticle(e.target.value) }
    const changePhoto = (e) => { setPhoto(e.target.value) }



    /////////

    const [posts, setPosts] = useState([])

    let { id } = useParams();

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])

    const currentPost = posts.filter((p) => p.id === id)

    const updatePost =  (id, c) => {
        const cTitle = title == "" ? c.title : title
        const cCategory = category == "" ? c.category : category
        const cDate = date == "" ? c.date : date
        const cArticle = article == "" ? c.article : article
        const cPhoto = photo == "" ? c.photo : photo

        const postDoc = doc(db, "posts", id)
        
        const newFields = {
            title:cTitle,
            category:cCategory,
            date:cDate,
            article:cArticle,
            photo:cPhoto
        }
        updateDoc(postDoc, newFields)
        navigate('/')
    }

    return (
        <div className="edit">
            {
                currentPost.map((c) => {
                    return (
                        <li key={c.id}>
                            <div className="add">
                                <form className="add-form" onSubmit={ () => updatePost(c.id, c)} >
                                    <h1 className="title">Edit a travel post</h1>

                                    <div className="add-container">
                                        <label name="title">Title</label>
                                        <input type="text" placeholder="Title" name="title" defaultValue={c.title} required
                                            onChange={changeTitle} />

                                        <label name="cars">Choose a category</label>

                                        <select name="category" className="add-category" defaultValue={c.category}
                                            onChange={changeCategory}  >
                                            <option value="cat">Category</option>
                                            <option value="europe">Europe</option>
                                            <option value="africa">Africa</option>
                                            <option value="north-america">North America</option>
                                            <option value="south-america">South America</option>
                                            <option value="asia">Asia</option>
                                            <option value="australia">Australia</option>
                                        </select>

                                        <label name="date">Date</label>
                                        <input type="date" name="date" defaultValue={c.date} required
                                            onChange={changeDate} />

                                        <label name="article">Article</label>
                                        <textarea className="add-textarea" name="article" cols="42" rows="10" placeholder="Write the article..." defaultValue={c.article}
                                            onChange={changeArticle}  ></textarea>

                                        <label name="photo">Photo</label>
                                        <input className="add-photo" type="text" name="photo" placeholder="Add a link (url) to a photo" defaultValue={c.photo} required
                                            onChange={changePhoto} />

                                        <button className="button-submit" type="submit" >Publish</button>
                                    </div>
                                </form>
                            </div>
                        </li>
                    )
                })
            }

        </div>
    )
}
