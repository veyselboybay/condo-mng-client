import React from 'react'
import Post from '../Post'
import { Container } from 'react-bootstrap'

const Posts = () => {
    return (
        <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts