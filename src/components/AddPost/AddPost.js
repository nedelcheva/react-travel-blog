import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom"
import './addPost.css'
import  { db } from '../../firebase'
import { collection,  addDoc } from "firebase/firestore"

export default function AddPost() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [article, setArticle] = useState("")
    const [photo, setPhoto] = useState("")
    const navigate = useNavigate()

    const postsCollectionRef = collection(db, "posts")

    //  const publishPost = async () => {
    //      await addDoc(postsCollectionRef, { article: article, category: category, date: date, photo: photo, title: title})
    //      navigate('/register')
    //  }

    const changeTitle = (e) => {setTitle(e.target.value)}
    const changeAuthor = (e) => {setAuthor(e.target.value)}
    const changeCategory = (e) => {setCategory(e.target.value)}
    const changeDate = (e) => {setDate(e.target.value)}
    const changeArticle = (e) => {setArticle(e.target.value)}
    const changePhoto = (e) => {setPhoto(e.target.value)}

    const testOne = () => {
        //const dataRef = db.ref("posts")
        const postData = {
            title,
            author,
            category,
            date,
            article,
            photo
        }

        addDoc(postsCollectionRef, postData)
        //postsCollectionRef.push(postData)
        navigate('/')
        
    }

    return (
        <div className="add">
            <form className="add-form" onSubmit={testOne} >
                <h1 className="title">Add a travel post</h1>

                <div className="add-container">
                    <label name="title">Title</label>
                    <input type="text" placeholder="Title" name="title" required 
                    onChange={changeTitle} />

                    <label name="author">Author</label>
                    <input type="text" placeholder="Author" name="author" required 
                    onChange={changeAuthor} />

                    <label name="cars">Choose a category</label>

                    <select name="category" className="add-category" 
                    onChange={changeCategory}  >
                        <option value="cat">Category</option>
                        <option value="europe">Europe</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="australia">Australia</option>
                    </select>

                    <label name="date">Date</label>
                    <input type="date" name="date" required 
                    onChange={changeDate} />

                    <label name="article">Article</label>
                    <textarea className="add-textarea" name="article" cols="42" rows="10" placeholder="Write the article..."
                    onChange={changeArticle}  ></textarea>

                    <label name="photo">Photo</label>
                    <input className="add-photo" type="text" name="photo" placeholder="Add a link (url) to a photo" required 
                    onChange={changePhoto} />

                    <button className="button-submit" type="submit" >Publish</button>
                </div>
            </form>
        </div>
    )
}
