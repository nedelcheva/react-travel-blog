import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="post-img" src={require('../../images/mexico.jpg').default}/>
            <div className="post-title">Two weeks in Mexico</div>
            <div className="post-wrapper">
               <div className="post-category">America</div>
            <div className="post-date">25.11.2021</div> 
            </div>
            <div className="post-description">Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt propRedundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop</div>
            
        </div>
    )
}
