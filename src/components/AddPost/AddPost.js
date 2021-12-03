import React from 'react'
import './addPost.css'

export default function AddPost() {
    return (
        <div className="add">
            <form className="add-form" action="POST" method="post">
                <h1 className="title">Add a travel post</h1>

                <div className="add-container">
                    <label for="title">Title</label>
                    <input type="text" placeholder="Title" name="title" required />

                    <label for="cars">Choose a category</label>

                    <select name="category" className="add-category">
                        <option value="europe">Europe</option>
                        <option value="africa">Africa</option>
                        <option value="north-america">North America</option>
                        <option value="south-america">South America</option>
                        <option value="asia">Asia</option>
                        <option value="australia">Australia</option>
                    </select>

                    <label name="date">Date</label>
                    <input type="date" name="date" required />

                    <label name="article">Article</label>
                    <textarea className="add-textarea" name="article" cols="42" rows="10" placeholder="Write the article..."></textarea>

                    <label name="photo">Photo</label>
                    <input className="add-photo" type="file" name="photo" placeholder="Add a photo" required />

                    <button className="button-submit" type="submit">Publish</button>
                </div>
            </form>
        </div>
    )
}
