import React from 'react'
import Post from '../Post/Post'
import { useState, useEffect } from 'react'



export default function Category() {
    const [pageURL, setPageURL] = useState(0)

    useEffect(() => {
        setPageURL(window.location.href.split('/'))
        
    }, [])
    console.log(pageURL[4])

    return (
        <div>
            <Post data={pageURL[4]}/>
        </div>
    )
}
