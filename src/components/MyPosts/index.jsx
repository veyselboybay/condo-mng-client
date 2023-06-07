import React from 'react'
import Post from '../Post'


const MyPosts = () => {
    return (
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts